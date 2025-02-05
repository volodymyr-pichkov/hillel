const FooterContacts = () => {
  return (
    <div className="flex flex-col items-start w-full sm:w-auto">
      <div className="flex items-center gap-x-4">
        <img src="../assets/icons/contacts.svg" alt="Contacts" />
        <p className="text-title font-roboto font-medium leading-[1.4]">
          8 800 111 22 33
        </p>
      </div>
      <p className="text-navigation text-xs leading-[1.4] mt-2.5 ml-8">
        Безкоштовно для дзвінків
      </p>
      <p className="text-navigation text-xs leading-[1.4] mt-2.5 ml-8">
        в межах України
      </p>
    </div>
  );
};

export default FooterContacts;
