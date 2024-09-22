export const formatDate = (dateString: string) => {
    const options: any = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    const date = new Date(dateString);
    return date.toLocaleString('en-GB', options);
}
  