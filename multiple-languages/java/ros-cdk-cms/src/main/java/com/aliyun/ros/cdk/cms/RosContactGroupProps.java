package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::ContactGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.595Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosContactGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosContactGroupProps.Jsii$Proxy.class)
public interface RosContactGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContactGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContactNames();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescribe();

    /**
     * @return a {@link Builder} of {@link RosContactGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosContactGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosContactGroupProps> {
        private java.lang.Object contactGroupName;
        private java.lang.Object contactNames;
        private java.lang.Object describe;

        /**
         * Sets the value of {@link RosContactGroupProps#getContactGroupName}
         * @param contactGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactGroupName(java.lang.String contactGroupName) {
            this.contactGroupName = contactGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosContactGroupProps#getContactGroupName}
         * @param contactGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactGroupName(com.aliyun.ros.cdk.core.IResolvable contactGroupName) {
            this.contactGroupName = contactGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosContactGroupProps#getContactNames}
         * @param contactNames the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactNames(com.aliyun.ros.cdk.core.IResolvable contactNames) {
            this.contactNames = contactNames;
            return this;
        }

        /**
         * Sets the value of {@link RosContactGroupProps#getContactNames}
         * @param contactNames the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactNames(java.util.List<? extends java.lang.Object> contactNames) {
            this.contactNames = contactNames;
            return this;
        }

        /**
         * Sets the value of {@link RosContactGroupProps#getDescribe}
         * @param describe the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder describe(java.lang.String describe) {
            this.describe = describe;
            return this;
        }

        /**
         * Sets the value of {@link RosContactGroupProps#getDescribe}
         * @param describe the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder describe(com.aliyun.ros.cdk.core.IResolvable describe) {
            this.describe = describe;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosContactGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosContactGroupProps build() {
            return new Jsii$Proxy(contactGroupName, contactNames, describe);
        }
    }

    /**
     * An implementation for {@link RosContactGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosContactGroupProps {
        private final java.lang.Object contactGroupName;
        private final java.lang.Object contactNames;
        private final java.lang.Object describe;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.contactGroupName = software.amazon.jsii.Kernel.get(this, "contactGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contactNames = software.amazon.jsii.Kernel.get(this, "contactNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.describe = software.amazon.jsii.Kernel.get(this, "describe", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object contactGroupName, final java.lang.Object contactNames, final java.lang.Object describe) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.contactGroupName = java.util.Objects.requireNonNull(contactGroupName, "contactGroupName is required");
            this.contactNames = java.util.Objects.requireNonNull(contactNames, "contactNames is required");
            this.describe = java.util.Objects.requireNonNull(describe, "describe is required");
        }

        @Override
        public final java.lang.Object getContactGroupName() {
            return this.contactGroupName;
        }

        @Override
        public final java.lang.Object getContactNames() {
            return this.contactNames;
        }

        @Override
        public final java.lang.Object getDescribe() {
            return this.describe;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("contactGroupName", om.valueToTree(this.getContactGroupName()));
            data.set("contactNames", om.valueToTree(this.getContactNames()));
            data.set("describe", om.valueToTree(this.getDescribe()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosContactGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosContactGroupProps.Jsii$Proxy that = (RosContactGroupProps.Jsii$Proxy) o;

            if (!contactGroupName.equals(that.contactGroupName)) return false;
            if (!contactNames.equals(that.contactNames)) return false;
            return this.describe.equals(that.describe);
        }

        @Override
        public final int hashCode() {
            int result = this.contactGroupName.hashCode();
            result = 31 * result + (this.contactNames.hashCode());
            result = 31 * result + (this.describe.hashCode());
            return result;
        }
    }
}
