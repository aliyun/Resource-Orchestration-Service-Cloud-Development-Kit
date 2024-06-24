package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>AttachPolicyToUser</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:08.640Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.AttachPolicyToUserProps")
@software.amazon.jsii.Jsii.Proxy(AttachPolicyToUserProps.Jsii$Proxy.class)
public interface AttachPolicyToUserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property policyName: Authorization policy name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName();

    /**
     * Property policyType: Authorization policy type.
     * <p>
     * Value: "System" or "Custom".
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyType();

    /**
     * Property userName: User name.Example: dev.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

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
        java.lang.Object policyName;
        java.lang.Object policyType;
        java.lang.Object userName;

        /**
         * Sets the value of {@link AttachPolicyToUserProps#getPolicyName}
         * @param policyName Property policyName: Authorization policy name. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToUserProps#getPolicyName}
         * @param policyName Property policyName: Authorization policy name. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToUserProps#getPolicyType}
         * @param policyType Property policyType: Authorization policy type. This parameter is required.
         *                   Value: "System" or "Custom".
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToUserProps#getPolicyType}
         * @param policyType Property policyType: Authorization policy type. This parameter is required.
         *                   Value: "System" or "Custom".
         * @return {@code this}
         */
        public Builder policyType(com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToUserProps#getUserName}
         * @param userName Property userName: User name.Example: dev. This parameter is required.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToUserProps#getUserName}
         * @param userName Property userName: User name.Example: dev. This parameter is required.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AttachPolicyToUserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AttachPolicyToUserProps {
        private final java.lang.Object policyName;
        private final java.lang.Object policyType;
        private final java.lang.Object userName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
            this.policyType = java.util.Objects.requireNonNull(builder.policyType, "policyType is required");
            this.userName = java.util.Objects.requireNonNull(builder.userName, "userName is required");
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.Object getPolicyType() {
            return this.policyType;
        }

        @Override
        public final java.lang.Object getUserName() {
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
