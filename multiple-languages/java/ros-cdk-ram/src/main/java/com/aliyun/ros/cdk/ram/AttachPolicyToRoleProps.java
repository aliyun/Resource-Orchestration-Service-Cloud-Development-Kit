package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>AttachPolicyToRole</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:53.504Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.AttachPolicyToRoleProps")
@software.amazon.jsii.Jsii.Proxy(AttachPolicyToRoleProps.Jsii$Proxy.class)
public interface AttachPolicyToRoleProps extends software.amazon.jsii.JsiiSerializable {

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
     * Property roleName: Role name.Example: dev.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRoleName();

    /**
     * @return a {@link Builder} of {@link AttachPolicyToRoleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AttachPolicyToRoleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AttachPolicyToRoleProps> {
        java.lang.Object policyName;
        java.lang.Object policyType;
        java.lang.Object roleName;

        /**
         * Sets the value of {@link AttachPolicyToRoleProps#getPolicyName}
         * @param policyName Property policyName: Authorization policy name. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToRoleProps#getPolicyName}
         * @param policyName Property policyName: Authorization policy name. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToRoleProps#getPolicyType}
         * @param policyType Property policyType: Authorization policy type. This parameter is required.
         *                   Value: "System" or "Custom".
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToRoleProps#getPolicyType}
         * @param policyType Property policyType: Authorization policy type. This parameter is required.
         *                   Value: "System" or "Custom".
         * @return {@code this}
         */
        public Builder policyType(com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToRoleProps#getRoleName}
         * @param roleName Property roleName: Role name.Example: dev. This parameter is required.
         * @return {@code this}
         */
        public Builder roleName(java.lang.String roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToRoleProps#getRoleName}
         * @param roleName Property roleName: Role name.Example: dev. This parameter is required.
         * @return {@code this}
         */
        public Builder roleName(com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AttachPolicyToRoleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AttachPolicyToRoleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AttachPolicyToRoleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AttachPolicyToRoleProps {
        private final java.lang.Object policyName;
        private final java.lang.Object policyType;
        private final java.lang.Object roleName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
            this.policyType = java.util.Objects.requireNonNull(builder.policyType, "policyType is required");
            this.roleName = java.util.Objects.requireNonNull(builder.roleName, "roleName is required");
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
        public final java.lang.Object getRoleName() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.AttachPolicyToRoleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AttachPolicyToRoleProps.Jsii$Proxy that = (AttachPolicyToRoleProps.Jsii$Proxy) o;

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
