import { Input, Select } from "antd";
import AttachmentWrapper, { AttachmentRow } from "./AttachmentWrapper";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateTimelineValues } from "../../store/slices/application";
const { TextArea } = Input;

const Request = ({ attachment, i }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const options = [
    {
      label: "104.23",
      value: "104.23",
    },
    {
      label: "104.11",
      value: "104.11",
    },
  ];

  const addresses = {
    104.23: {
      city: "Wuppertal",
      postalcode: "12345",
      street: "Street",
      street_number: "12",
    },
    104.11: {
      city: "Wuppertal",
      postalcode: "12345",
      street: "Street",
      street_number: "20",
    },
  };

  const updateValue = (value, property) => {
    dispatch(
      updateTimelineValues({
        timelineIndex: i,
        itemValue: value,
        property: property,
        applicationId: id,
      })
    );
  };

  return (
    <AttachmentWrapper>
      <div className="flex">
        <div className="w-[22%]" />
        <div className="w-full flex items-center justify-center gap-2">
          <h4 className="mb-0">Antragssteller</h4>
          <Select
            className="w-30"
            options={options}
            onChange={(value) => {
              updateValue(addresses[value].city, "requester_city");
              updateValue(addresses[value].postalcode, "requester_postalcode");
              updateValue(addresses[value].street, "requester_street");
              updateValue(
                addresses[value].street_number,
                "requester_street_number"
              );
            }}
          />
        </div>
      </div>
      <AttachmentRow name="Stadt">
        <Input
          value={attachment?.requester_city}
          onChange={(e) => {
            updateValue(e.target.value, "requester_city");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Postleitzahl">
        <Input
          value={attachment?.requester_postalcode}
          onChange={(e) => {
            updateValue(e.target.value, "requester_postalcode");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Straße">
        <Input
          value={attachment?.requester_street}
          onChange={(e) => {
            updateValue(e.target.value, "requester_street");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Hausnummer">
        <Input
          value={attachment?.requester_street_number}
          onChange={(e) => {
            updateValue(e.target.value, "requester_street_number");
          }}
        />
      </AttachmentRow>
      <div className="flex">
        <div className="w-[22%]" />
        <div className="w-full flex items-center justify-center gap-2">
          <h4 className="mb-0">Rechnungsadresse</h4>
          <Select
            className="w-30"
            options={options}
            onChange={(value) => {
              updateValue(addresses[value].city, "billing_city");
              updateValue(addresses[value].postalcode, "billing_postal_code");
              updateValue(addresses[value].street, "billing_street");
              updateValue(
                addresses[value].street_number,
                "billing_street_number"
              );
            }}
          />
        </div>
      </div>
      <AttachmentRow name="Stadt">
        <Input
          value={attachment?.billing_city}
          onChange={(e) => {
            updateValue(e.target.value, "billing_city");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Postleitzahl">
        <Input
          value={attachment?.billing_postal_code}
          onChange={(e) => {
            updateValue(e.target.value, "billing_postal_code");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Straße">
        <Input
          value={attachment?.billing_street}
          onChange={(e) => {
            updateValue(e.target.value, "billing_street");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Hausnummer">
        <Input
          value={attachment?.billing_street_number}
          onChange={(e) => {
            updateValue(e.target.value, "billing_street_number");
          }}
        />
      </AttachmentRow>
      <div className="flex">
        <div className="w-[22%]" />
        <h4 className="w-full">Weiteres</h4>
      </div>
      <AttachmentRow name="Vorname">
        <Input
          value={attachment?.firstname}
          onChange={(e) => {
            updateValue(e.target.value, "firstname");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Nachname">
        <Input
          value={attachment?.lastname}
          onChange={(e) => {
            updateValue(e.target.value, "lastname");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Telefonnummer">
        <Input
          value={attachment?.phone}
          onChange={(e) => {
            updateValue(e.target.value, "phone");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="E-Mail">
        <Input
          value={attachment?.email}
          onChange={(e) => {
            updateValue(e.target.value, "email");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Ort des Schildes">
        <Input
          value={attachment?.sign_location}
          onChange={(e) => {
            updateValue(e.target.value, "sign_location");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Beschreibung">
        <Input
          value={attachment?.description}
          onChange={(e) => {
            updateValue(e.target.value, "description");
          }}
        />
      </AttachmentRow>
      <AttachmentRow name="Uhrzeit">
        <Input
          value={attachment?.time}
          onChange={(e) => {
            updateValue(e.target.value, "time");
          }}
        />
      </AttachmentRow>
    </AttachmentWrapper>
  );
};

export default Request;
