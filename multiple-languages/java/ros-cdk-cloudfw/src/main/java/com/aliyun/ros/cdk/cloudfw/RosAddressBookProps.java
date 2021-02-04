package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a `ALIYUN::CLOUDFW::AddressBook`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.231Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosAddressBookProps")
@software.amazon.jsii.Jsii.Proxy(RosAddressBookProps.Jsii$Proxy.class)
public interface RosAddressBookProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getGroupType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAddressList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoAddTagEcs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTagRelation() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAddressBookProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAddressBookProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAddressBookProps> {
        private java.lang.String description;
        private java.lang.String groupName;
        private java.lang.String groupType;
        private java.lang.String addressList;
        private java.lang.Object autoAddTagEcs;
        private java.lang.String regionId;
        private java.lang.Object tagList;
        private java.lang.String tagRelation;

        /**
         * Sets the value of {@link RosAddressBookProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressBookProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressBookProps#getGroupType}
         * @param groupType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupType(java.lang.String groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressBookProps#getAddressList}
         * @param addressList the value to be set.
         * @return {@code this}
         */
        public Builder addressList(java.lang.String addressList) {
            this.addressList = addressList;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressBookProps#getAutoAddTagEcs}
         * @param autoAddTagEcs the value to be set.
         * @return {@code this}
         */
        public Builder autoAddTagEcs(java.lang.Boolean autoAddTagEcs) {
            this.autoAddTagEcs = autoAddTagEcs;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressBookProps#getAutoAddTagEcs}
         * @param autoAddTagEcs the value to be set.
         * @return {@code this}
         */
        public Builder autoAddTagEcs(com.aliyun.ros.cdk.core.IResolvable autoAddTagEcs) {
            this.autoAddTagEcs = autoAddTagEcs;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressBookProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressBookProps#getTagList}
         * @param tagList the value to be set.
         * @return {@code this}
         */
        public Builder tagList(com.aliyun.ros.cdk.core.IResolvable tagList) {
            this.tagList = tagList;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressBookProps#getTagList}
         * @param tagList the value to be set.
         * @return {@code this}
         */
        public Builder tagList(java.util.List<? extends java.lang.Object> tagList) {
            this.tagList = tagList;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressBookProps#getTagRelation}
         * @param tagRelation the value to be set.
         * @return {@code this}
         */
        public Builder tagRelation(java.lang.String tagRelation) {
            this.tagRelation = tagRelation;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAddressBookProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAddressBookProps build() {
            return new Jsii$Proxy(description, groupName, groupType, addressList, autoAddTagEcs, regionId, tagList, tagRelation);
        }
    }

    /**
     * An implementation for {@link RosAddressBookProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAddressBookProps {
        private final java.lang.String description;
        private final java.lang.String groupName;
        private final java.lang.String groupType;
        private final java.lang.String addressList;
        private final java.lang.Object autoAddTagEcs;
        private final java.lang.String regionId;
        private final java.lang.Object tagList;
        private final java.lang.String tagRelation;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.groupType = software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.addressList = software.amazon.jsii.Kernel.get(this, "addressList", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoAddTagEcs = software.amazon.jsii.Kernel.get(this, "autoAddTagEcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tagList = software.amazon.jsii.Kernel.get(this, "tagList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagRelation = software.amazon.jsii.Kernel.get(this, "tagRelation", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String description, final java.lang.String groupName, final java.lang.String groupType, final java.lang.String addressList, final java.lang.Object autoAddTagEcs, final java.lang.String regionId, final java.lang.Object tagList, final java.lang.String tagRelation) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = java.util.Objects.requireNonNull(description, "description is required");
            this.groupName = java.util.Objects.requireNonNull(groupName, "groupName is required");
            this.groupType = java.util.Objects.requireNonNull(groupType, "groupType is required");
            this.addressList = addressList;
            this.autoAddTagEcs = autoAddTagEcs;
            this.regionId = regionId;
            this.tagList = tagList;
            this.tagRelation = tagRelation;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.String getGroupType() {
            return this.groupType;
        }

        @Override
        public final java.lang.String getAddressList() {
            return this.addressList;
        }

        @Override
        public final java.lang.Object getAutoAddTagEcs() {
            return this.autoAddTagEcs;
        }

        @Override
        public final java.lang.String getRegionId() {
            return this.regionId;
        }

        @Override
        public final java.lang.Object getTagList() {
            return this.tagList;
        }

        @Override
        public final java.lang.String getTagRelation() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosAddressBookProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAddressBookProps.Jsii$Proxy that = (RosAddressBookProps.Jsii$Proxy) o;

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
