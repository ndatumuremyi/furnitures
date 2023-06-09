import {JWT_ACCESS_SECRET} from "$env/static/private";
import prisma from "$lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


function createJWT(user : any) {
  return  jwt.sign({id: user.id, email: user.email}, JWT_ACCESS_SECRET, {
    expiresIn: '1d'
  });
}

// export async function createUser(email: string, password: string) {
//   try {
//     const user = await prisma.user.create({
//       data: {
//         email,
//         password: await bcrypt.hash(password, 12)
//       }
//     });
//     const token = createJWT(user);

//     return {token};
//   } catch (error) {
//     return error;
//   }
// }

export async function loginUser(email:string, password:string): Promise<{ error?: { message: string; status: number; };token?: string; }> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      return {
        error: {
        message: 'Incorrect email or password',
        status: 404
      }};
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return {error: {
        message: 'Incorrect email or password',
        status: 401
      }};
    }

    const token = createJWT(user);

    return {token};
  } catch (error : unknown) {
    return { error:{message: "something went wrong" , status: 500} };
  }
}