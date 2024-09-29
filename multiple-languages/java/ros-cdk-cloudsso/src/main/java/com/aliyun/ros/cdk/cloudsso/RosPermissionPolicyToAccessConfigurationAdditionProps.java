package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>RosPermissionPolicyToAccessConfigurationAddition</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:37.006Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosPermissionPolicyToAccessConfigurationAdditionProps")
@software.amazon.jsii.Jsii.Proxy(RosPermissionPolicyToAccessConfigurationAdditionProps.Jsii$Proxy.class)
public interface RosPermissionPolicyToAccessConfigurationAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessConfigurationId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPermissionPolicyName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPermissionPolicyType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInlinePolicyDocument() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPermissionPolicyToAccessConfigurationAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPermissionPolicyToAccessConfigurationAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPermissionPolicyToAccessConfigurationAdditionProps> {
        java.lang.Object accessConfigurationId;
        java.lang.Object directoryId;
        java.lang.Object permissionPolicyName;
        java.lang.Object permissionPolicyType;
        java.lang.Object inlinePolicyDocument;

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getAccessConfigurationId}
         * @param accessConfigurationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(java.lang.String accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getAccessConfigurationId}
         * @param accessConfigurationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(com.aliyun.ros.cdk.core.IResolvable accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getPermissionPolicyName}
         * @param permissionPolicyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permissionPolicyName(java.lang.String permissionPolicyName) {
            this.permissionPolicyName = permissionPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getPermissionPolicyName}
         * @param permissionPolicyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permissionPolicyName(com.aliyun.ros.cdk.core.IResolvable permissionPolicyName) {
            this.permissionPolicyName = permissionPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getPermissionPolicyType}
         * @param permissionPolicyType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permissionPolicyType(java.lang.String permissionPolicyType) {
            this.permissionPolicyType = permissionPolicyType;
            return this;
        }

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getPermissionPolicyType}
         * @param permissionPolicyType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permissionPolicyType(com.aliyun.ros.cdk.core.IResolvable permissionPolicyType) {
            this.permissionPolicyType = permissionPolicyType;
            return this;
        }

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getInlinePolicyDocument}
         * @param inlinePolicyDocument the value to be set.
         * @return {@code this}
         */
        public Builder inlinePolicyDocument(com.aliyun.ros.cdk.core.IResolvable inlinePolicyDocument) {
            this.inlinePolicyDocument = inlinePolicyDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosPermissionPolicyToAccessConfigurationAdditionProps#getInlinePolicyDocument}
         * @param inlinePolicyDocument the value to be set.
         * @return {@code this}
         */
        public Builder inlinePolicyDocument(java.util.Map<java.lang.String, ? extends java.lang.Object> inlinePolicyDocument) {
            this.inlinePolicyDocument = inlinePolicyDocument;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPermissionPolicyToAccessConfigurationAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPermissionPolicyToAccessConfigurationAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPermissionPolicyToAccessConfigurationAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPermissionPolicyToAccessConfigurationAdditionProps {
        private final java.lang.Object accessConfigurationId;
        private final java.lang.Object directoryId;
        private final java.lang.Object permissionPolicyName;
        private final java.lang.Object permissionPolicyType;
        private final java.lang.Object inlinePolicyDocument;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessConfigurationId = software.amazon.jsii.Kernel.get(this, "accessConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.permissionPolicyName = software.amazon.jsii.Kernel.get(this, "permissionPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.permissionPolicyType = software.amazon.jsii.Kernel.get(this, "permissionPolicyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.inlinePolicyDocument = software.amazon.jsii.Kernel.get(this, "inlinePolicyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessConfigurationId = java.util.Objects.requireNonNull(builder.accessConfigurationId, "accessConfigurationId is required");
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.permissionPolicyName = java.util.Objects.requireNonNull(builder.permissionPolicyName, "permissionPolicyName is required");
            this.permissionPolicyType = java.util.Objects.requireNonNull(builder.permissionPolicyType, "permissionPolicyType is required");
            this.inlinePolicyDocument = builder.inlinePolicyDocument;
        }

        @Override
        public final java.lang.Object getAccessConfigurationId() {
            return this.accessConfigurationId;
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getPermissionPolicyName() {
            return this.permissionPolicyName;
        }

        @Override
        public final java.lang.Object getPermissionPolicyType() {
            return this.permissionPolicyType;
        }

        @Override
        public final java.lang.Object getInlinePolicyDocument() {
            return this.inlinePolicyDocument;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessConfigurationId", om.valueToTree(this.getAccessConfigurationId()));
            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            data.set("permissionPolicyName", om.valueToTree(this.getPermissionPolicyName()));
            data.set("permissionPolicyType", om.valueToTree(this.getPermissionPolicyType()));
            if (this.getInlinePolicyDocument() != null) {
                data.set("inlinePolicyDocument", om.valueToTree(this.getInlinePolicyDocument()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.RosPermissionPolicyToAccessConfigurationAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPermissionPolicyToAccessConfigurationAdditionProps.Jsii$Proxy that = (RosPermissionPolicyToAccessConfigurationAdditionProps.Jsii$Proxy) o;

            if (!accessConfigurationId.equals(that.accessConfigurationId)) return false;
            if (!directoryId.equals(that.directoryId)) return false;
            if (!permissionPolicyName.equals(that.permissionPolicyName)) return false;
            if (!permissionPolicyType.equals(that.permissionPolicyType)) return false;
            return this.inlinePolicyDocument != null ? this.inlinePolicyDocument.equals(that.inlinePolicyDocument) : that.inlinePolicyDocument == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessConfigurationId.hashCode();
            result = 31 * result + (this.directoryId.hashCode());
            result = 31 * result + (this.permissionPolicyName.hashCode());
            result = 31 * result + (this.permissionPolicyType.hashCode());
            result = 31 * result + (this.inlinePolicyDocument != null ? this.inlinePolicyDocument.hashCode() : 0);
            return result;
        }
    }
}
