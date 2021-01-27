package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.325Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.AttachPolicyToUserProps")
@software.amazon.jsii.Jsii.Proxy(AttachPolicyToUserProps.Jsii$Proxy.class)
public interface AttachPolicyToUserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPolicyName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPolicyType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getUserName();

    /**
     * @return a {@link Builder} of {@link AttachPolicyToUserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AttachPolicyToUserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AttachPolicyToUserProps> {
        private java.lang.String policyName;
        private java.lang.String policyType;
        private java.lang.String userName;

        /**
         * Sets the value of {@link AttachPolicyToUserProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToUserProps#getPolicyType}
         * @param policyType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToUserProps#getUserName}
         * @param userName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AttachPolicyToUserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AttachPolicyToUserProps build() {
            return new Jsii$Proxy(policyName, policyType, userName);
        }
    }

    /**
     * An implementation for {@link AttachPolicyToUserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AttachPolicyToUserProps {
        private final java.lang.String policyName;
        private final java.lang.String policyType;
        private final java.lang.String userName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String policyName, final java.lang.String policyType, final java.lang.String userName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyName = java.util.Objects.requireNonNull(policyName, "policyName is required");
            this.policyType = java.util.Objects.requireNonNull(policyType, "policyType is required");
            this.userName = java.util.Objects.requireNonNull(userName, "userName is required");
        }

        @Override
        public final java.lang.String getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.String getPolicyType() {
            return this.policyType;
        }

        @Override
        public final java.lang.String getUserName() {
            return this.userName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("policyName", om.valueToTree(this.getPolicyName()));
            data.set("policyType", om.valueToTree(this.getPolicyType()));
            data.set("userName", om.valueToTree(this.getUserName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.AttachPolicyToUserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AttachPolicyToUserProps.Jsii$Proxy that = (AttachPolicyToUserProps.Jsii$Proxy) o;

            if (!policyName.equals(that.policyName)) return false;
            if (!policyType.equals(that.policyType)) return false;
            return this.userName.equals(that.userName);
        }

        @Override
        public final int hashCode() {
            int result = this.policyName.hashCode();
            result = 31 * result + (this.policyType.hashCode());
            result = 31 * result + (this.userName.hashCode());
            return result;
        }
    }
}
