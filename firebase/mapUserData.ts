interface userData {
    uid: string;
    email: string;
    xa: string;
    displayName: string;
    photoUrl: string;
}

export const mapUserData = (user: userData) => {
    const { uid, email, xa, displayName, photoUrl } = user
    return {
        id: uid,
        email,
        token: xa,
        name: displayName,
        profilePic: photoUrl,
    }
}