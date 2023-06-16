import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

const toast = (message: Message | null | undefined) => {
	if (message) {
		const toastSettings: ToastSettings = {
			message: message.text,
			background: message.type !== 'success' ? 'variant-filled-error' : 'variant-filled-success'
		};
		toastStore.trigger(toastSettings);
	}
};

export default toast;
