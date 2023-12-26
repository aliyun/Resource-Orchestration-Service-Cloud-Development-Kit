package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>AddressBook</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:14.288Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.AddressBookProps")
@software.amazon.jsii.Jsii.Proxy(AddressBookProps.Jsii$Proxy.class)
public interface AddressBookProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: Address book description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     * Property groupName: Name Address book.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupType();

    /**
     * Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * <p>
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressList() {
        return null;
    }

    /**
     * Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book.
     * <p>
     * Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoAddTagEcs() {
        return null;
    }

    /**
     * Property regionId: Region ID.
     * <p>
     * Default to cn-hangzhou.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
        return null;
    }

    /**
     * Property tagList:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagList() {
        return null;
    }

    /**
     * Property tagRelation: The relationship between the labels to be matched more ECS.
     * <p>
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagRelation() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AddressBookProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AddressBookProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AddressBookProps> {
        java.lang.Object description;
        java.lang.Object groupName;
        java.lang.Object groupType;
        java.lang.Object addressList;
        java.lang.Object autoAddTagEcs;
        java.lang.Object regionId;
        java.lang.Object tagList;
        java.lang.Object tagRelation;

        /**
         * Sets the value of {@link AddressBookProps#getDescription}
         * @param description Property description: Address book description. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getDescription}
         * @param description Property description: Address book description. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getGroupName}
         * @param groupName Property groupName: Name Address book. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getGroupName}
         * @param groupName Property groupName: Name Address book. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getGroupType}
         * @param groupType Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book. This parameter is required.
         * @return {@code this}
         */
        public Builder groupType(java.lang.String groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getGroupType}
         * @param groupType Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book. This parameter is required.
         * @return {@code this}
         */
        public Builder groupType(com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getAddressList}
         * @param addressList Property addressList: Address list of the address book, between multiple addresses separated by commas.
         *                    Note: When GroupType ip, it must be set to port or domain.
         *                    When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
         *                    When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
         *                    When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
         * @return {@code this}
         */
        public Builder addressList(java.lang.String addressList) {
            this.addressList = addressList;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getAddressList}
         * @param addressList Property addressList: Address list of the address book, between multiple addresses separated by commas.
         *                    Note: When GroupType ip, it must be set to port or domain.
         *                    When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
         *                    When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
         *                    When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
         * @return {@code this}
         */
        public Builder addressList(com.aliyun.ros.cdk.core.IResolvable addressList) {
            this.addressList = addressList;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getAutoAddTagEcs}
         * @param autoAddTagEcs Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book.
         *                      Default to false.
         * @return {@code this}
         */
        public Builder autoAddTagEcs(java.lang.Boolean autoAddTagEcs) {
            this.autoAddTagEcs = autoAddTagEcs;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getAutoAddTagEcs}
         * @param autoAddTagEcs Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book.
         *                      Default to false.
         * @return {@code this}
         */
        public Builder autoAddTagEcs(com.aliyun.ros.cdk.core.IResolvable autoAddTagEcs) {
            this.autoAddTagEcs = autoAddTagEcs;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getRegionId}
         * @param regionId Property regionId: Region ID.
         *                 Default to cn-hangzhou.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getRegionId}
         * @param regionId Property regionId: Region ID.
         *                 Default to cn-hangzhou.
         * @return {@code this}
         */
        public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getTagList}
         * @param tagList Property tagList:.
         * @return {@code this}
         */
        public Builder tagList(com.aliyun.ros.cdk.core.IResolvable tagList) {
            this.tagList = tagList;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getTagList}
         * @param tagList Property tagList:.
         * @return {@code this}
         */
        public Builder tagList(java.util.List<? extends java.lang.Object> tagList) {
            this.tagList = tagList;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getTagRelation}
         * @param tagRelation Property tagRelation: The relationship between the labels to be matched more ECS.
         *                    and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
         *                    or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
         * @return {@code this}
         */
        public Builder tagRelation(java.lang.String tagRelation) {
            this.tagRelation = tagRelation;
            return this;
        }

        /**
         * Sets the value of {@link AddressBookProps#getTagRelation}
         * @param tagRelation Property tagRelation: The relationship between the labels to be matched more ECS.
         *                    and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
         *                    or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
         * @return {@code this}
         */
        public Builder tagRelation(com.aliyun.ros.cdk.core.IResolvable tagRelation) {
            this.tagRelation = tagRelation;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AddressBookProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AddressBookProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AddressBookProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AddressBookProps {
        private final java.lang.Object description;
        private final java.lang.Object groupName;
        private final java.lang.Object groupType;
        private final java.lang.Object addressList;
        private final java.lang.Object autoAddTagEcs;
        private final java.lang.Object regionId;
        private final java.lang.Object tagList;
        private final java.lang.Object tagRelation;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupType = software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressList = software.amazon.jsii.Kernel.get(this, "addressList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoAddTagEcs = software.amazon.jsii.Kernel.get(this, "autoAddTagEcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagList = software.amazon.jsii.Kernel.get(this, "tagList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagRelation = software.amazon.jsii.Kernel.get(this, "tagRelation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.groupType = java.util.Objects.requireNonNull(builder.groupType, "groupType is required");
            this.addressList = builder.addressList;
            this.autoAddTagEcs = builder.autoAddTagEcs;
            this.regionId = builder.regionId;
            this.tagList = builder.tagList;
            this.tagRelation = builder.tagRelation;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getGroupType() {
            return this.groupType;
        }

        @Override
        public final java.lang.Object getAddressList() {
            return this.addressList;
        }

        @Override
        public final java.lang.Object getAutoAddTagEcs() {
            return this.autoAddTagEcs;
        }

        @Override
        public final java.lang.Object getRegionId() {
            return this.regionId;
        }

        @Override
        public final java.lang.Object getTagList() {
            return this.tagList;
        }

        @Override
        public final java.lang.Object getTagRelation() {
            return this.tagRelation;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("description", om.valueToTree(this.getDescription()));
            data.set("groupName", om.valueToTree(this.getGroupName()));
            data.set("groupType", om.valueToTree(this.getGroupType()));
            if (this.getAddressList() != null) {
                data.set("addressList", om.valueToTree(this.getAddressList()));
            }
            if (this.getAutoAddTagEcs() != null) {
                data.set("autoAddTagEcs", om.valueToTree(this.getAutoAddTagEcs()));
            }
            if (this.getRegionId() != null) {
                data.set("regionId", om.valueToTree(this.getRegionId()));
            }
            if (this.getTagList() != null) {
                data.set("tagList", om.valueToTree(this.getTagList()));
            }
            if (this.getTagRelation() != null) {
                data.set("tagRelation", om.valueToTree(this.getTagRelation()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.AddressBookProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AddressBookProps.Jsii$Proxy that = (AddressBookProps.Jsii$Proxy) o;

            if (!description.equals(that.description)) return false;
            if (!groupName.equals(that.groupName)) return false;
            if (!groupType.equals(that.groupType)) return false;
            if (this.addressList != null ? !this.addressList.equals(that.addressList) : that.addressList != null) return false;
            if (this.autoAddTagEcs != null ? !this.autoAddTagEcs.equals(that.autoAddTagEcs) : that.autoAddTagEcs != null) return false;
            if (this.regionId != null ? !this.regionId.equals(that.regionId) : that.regionId != null) return false;
            if (this.tagList != null ? !this.tagList.equals(that.tagList) : that.tagList != null) return false;
            return this.tagRelation != null ? this.tagRelation.equals(that.tagRelation) : that.tagRelation == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description.hashCode();
            result = 31 * result + (this.groupName.hashCode());
            result = 31 * result + (this.groupType.hashCode());
            result = 31 * result + (this.addressList != null ? this.addressList.hashCode() : 0);
            result = 31 * result + (this.autoAddTagEcs != null ? this.autoAddTagEcs.hashCode() : 0);
            result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
            result = 31 * result + (this.tagList != null ? this.tagList.hashCode() : 0);
            result = 31 * result + (this.tagRelation != null ? this.tagRelation.hashCode() : 0);
            return result;
        }
    }
}
