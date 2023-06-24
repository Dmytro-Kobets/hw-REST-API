const fs = require("fs").promises;
const uuid = require("uuid").v4;

exports.getContactsList = async (req, res) => {
  try {
    const contacts = JSON.parse(await fs.readFile("./models/contacts.json"));
    res.status(200).json({ contacts });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong...",
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const { contactId } = req.params;
    console.log(req.params);
    const contacts = JSON.parse(await fs.readFile("./models/contacts.json"));

    const contact = contacts.find((contact) => contact.id === contactId);

    res.status(200).json({
      contact,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong...",
    });
  }
};

exports.addContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const contacts = JSON.parse(await fs.readFile("./models/contacts.json"));

    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };
    console.log(newContact);
    contacts.push(newContact);
    await fs.writeFile("./models/contacts.json", JSON.stringify(contacts));
    res.status(201).json({
      contact: newContact,
    });
  } catch (err) {
    const aboba = uuid();
    console.log(aboba);
    res.status(500).json({
      message: "Something went wrong...",
    });
  }
};

exports.removeContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contacts = JSON.parse(await fs.readFile("./models/contacts.json"));
    const contactIndex = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (contactIndex === -1) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    const deletedContact = contacts.splice(contactIndex, 1);
    await fs.writeFile("./models/contacts.json", JSON.stringify(contacts));
    return res.status(200).json({
      message: "contact deleted",
      deletedContact: deletedContact[0],
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong...",
    });
  }
};
