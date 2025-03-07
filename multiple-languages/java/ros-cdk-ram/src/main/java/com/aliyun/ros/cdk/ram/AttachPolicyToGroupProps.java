package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>AttachPolicyToGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytogroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.355Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.AttachPolicyToGroupProps")
@software.amazon.jsii.Jsii.Proxy(AttachPolicyToGroupProps.Jsii$Proxy.class)
public interface AttachPolicyToGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupName: User group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

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
     * @return a {@link Builder} of {@link AttachPolicyToGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AttachPolicyToGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AttachPolicyToGroupProps> {
        java.lang.Object groupName;
        java.lang.Object policyName;
        java.lang.Object policyType;

        /**
         * Sets the value of {@link AttachPolicyToGroupProps#getGroupName}
         * @param groupName Property groupName: User group name. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToGroupProps#getGroupName}
         * @param groupName Property groupName: User group name. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToGroupProps#getPolicyName}
         * @param policyName Property policyName: Authorization policy name. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToGroupProps#getPolicyName}
         * @param policyName Property policyName: Authorization policy name. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToGroupProps#getPolicyType}
         * @param policyType Property policyType: Authorization policy type. This parameter is required.
         *                   Value: "System" or "Custom".
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link AttachPolicyToGroupProps#getPolicyType}
         * @param policyType Property policyType: Authorization policy type. This parameter is required.
         *                   Value: "System" or "Custom".
         * @return {@code this}
         */
        public Builder policyType(com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AttachPolicyToGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AttachPolicyToGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AttachPolicyToGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AttachPolicyToGroupProps {
        private final java.lang.Object groupName;
        private final java.lang.Object policyName;
        private final java.lang.Object policyType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
            this.policyType = java.util.Objects.requireNonNull(builder.policyType, "policyType is required");
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupName", om.valueToTree(this.getGroupName()));
            data.set("policyName", om.valueToTree(this.getPolicyName()));
            data.set("policyType", om.valueToTree(this.getPolicyType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.AttachPolicyToGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AttachPolicyToGroupProps.Jsii$Proxy that = (AttachPolicyToGroupProps.Jsii$Proxy) o;

            if (!groupName.equals(that.groupName)) return false;
            if (!policyName.equals(that.policyName)) return false;
            return this.policyType.equals(that.policyType);
        }

        @Override
        public final int hashCode() {
            int result = this.groupName.hashCode();
            result = 31 * result + (this.policyName.hashCode());
            result = 31 * result + (this.policyType.hashCode());
            return result;
        }
    }
}
