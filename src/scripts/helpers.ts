export const stripAddress = (address: any) => {
    if (address == null) return '';
    return `${address.substr(0, 4)}..${address.substr(address.length - 5, address.length)}`
}

  