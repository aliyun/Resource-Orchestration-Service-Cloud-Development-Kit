package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.201Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosAttachPolicyToRoleProps")
@software.amazon.jsii.Jsii.Proxy(RosAttachPolicyToRoleProps.Jsii$Proxy.class)
public interface RosAttachPolicyToRoleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPolicyName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPolicyType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRoleName();

    /**
     * @return a {@link Builder} of {@link RosAttachPolicyToRoleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAttachPolicyToRoleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAttachPolicyToRoleProps> {
        private java.lang.String policyName;
        private java.lang.String policyType;
        private java.lang.String roleName;

        /**
         * Sets the value of {@link RosAttachPolicyToRoleProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link RosAttachPolicyToRoleProps#getPolicyType}
         * @param policyType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link RosAttachPolicyToRoleProps#getRoleName}
         * @param roleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder roleName(java.lang.String roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAttachPolicyToRoleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAttachPolicyToRoleProps build() {
            return new Jsii$Proxy(policyName, policyType, roleName);
        }
    }

    /**
     * An implementation for {@link RosAttachPolicyToRoleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAttachPolicyToRoleProps {
        private final java.lang.String policyName;
        private final java.lang.String policyType;
        private final java.lang.String roleName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String policyName, final java.lang.String policyType, final java.lang.String roleName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyName = java.util.Objects.requireNonNull(policyName, "policyName is required");
            this.policyType = java.util.Objects.requireNonNull(policyType, "policyType is required");
            this.roleName = java.util.Objects.requireNonNull(roleName, "roleName is required");
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
        public final java.lang.String getRoleName() {
            return this.roleName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("policyName", om.valueToTree(this.getPolicyName()));
            data.set("policyType", om.valueToTree(this.getPolicyType()));
            data.set("roleName", om.valueToTree(this.getRoleName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosAttachPolicyToRoleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAttachPolicyToRoleProps.Jsii$Proxy that = (RosAttachPolicyToRoleProps.Jsii$Proxy) o;

            if (!policyName.equals(that.policyName)) return false;
            if (!policyType.equals(that.policyType)) return false;
            return this.roleName.equals(that.roleName);
        }

        @Override
        public final int hashCode() {
            int result = this.policyName.hashCode();
            result = 31 * result + (this.policyType.hashCode());
            result = 31 * result + (this.roleName.hashCode());
            return result;
        }
    }
}
