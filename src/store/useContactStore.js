import { create } from "zustand";

export const useContactStore = create((set) => ({
  contacts: [
    {
      id: 2284,
      name: "echo",
      phone: "0978787878",
      email: "echo@gmail.com",
      address: "no28,5street,4qrt ,Yangon",
    },
    {
      id: 2285,
      name: "DiPa",
      phone: "0967676767",
      email: "dipa@gmail.com",
      address: "no28,5street,4qrt ,Yangon",
    },
  ],

  // fetchContact: (fetchContacts) =>
  //   set((state) => ({
  //     contacts: [...state.contacts, fetchContacts],
  //   })),
  updateContact: async (id, newContact) =>
    set((state) => ({
      contacts: state.contacts.map((el) => (el.id === id ? newContact : el)),
    })),

  addNewContact: (newOne) =>
    set((state) => ({
      contacts: [...state.contacts, newOne],
    })),
}));
