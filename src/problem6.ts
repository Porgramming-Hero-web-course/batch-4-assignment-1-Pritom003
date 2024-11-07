{

    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    
    const updateProfile = (profile: Profile, New: Partial<Profile>): Profile => {
        return { ...profile, ...New };
    }
    
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { email: 'sdf' }));
    
    



}