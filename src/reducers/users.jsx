let initialState = {
    users: [
        {
          id: 1,
          nama: "Hakim",
          alamat: "Bintaro",
          umur: 21,
          noHP: "082210339685",
        },
        {
          id: 2,
          nama: "Hakim1",
          alamat: "Bintaro1",
          umur: 22,
          noHP: "082210339685",
        },
        {
          id: 3,
          nama: "Hanif",
          alamat: "Bintaro",
          umur: 23,
          noHP: "082210339685",
        },
        {
          id: 4,
          nama: "Hanif1",
          alamat: "Bintaro",
          umur: 23,
          noHP: "082210339685",
        },
      ],
      error : false,
      title: "RestFul  API  Test",
};

const users = (state = initialState, action) => {
  return state
}

export default users
