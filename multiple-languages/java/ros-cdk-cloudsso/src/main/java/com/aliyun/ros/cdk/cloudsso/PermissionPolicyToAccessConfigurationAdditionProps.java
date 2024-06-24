package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>PermissionPolicyToAccessConfigurationAddition</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:05.010Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.PermissionPolicyToAccessConfigurationAdditionProps")
@software.amazon.jsii.Jsii.Proxy(PermissionPolicyToAccessConfigurationAdditionProps.Jsii$Proxy.class)
public interface PermissionPolicyToAccessConfigurationAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessConfigurationId: The ID of the access configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessConfigurationId();

    /**
     * Property directoryId: The ID of the directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     * Property permissionPolicyName: The name of the permission policy.
     * <p>
     * <ul>
     * <li>If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.</li>
     * <li>If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPermissionPolicyName();

    /**
     * Property permissionPolicyType: The type of the permission policy.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>System: system policy. Resource Access Management (RAM) system policies are reused.</li>
     * <li>Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPermissionPolicyType();

    /**
     * Property inlinePolicyDocument: The configurations of the inline policy.
     * <p>
     * The value can be up to 4,096 characters in length.
     * If you set PermissionPolicyType to Inline, you must specify this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInlinePolicyDocument() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PermissionPolicyToAccessConfigurationAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PermissionPolicyToAccessConfigurationAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PermissionPolicyToAccessConfigurationAdditionProps> {
        java.lang.Object accessConfigurationId;
        java.lang.Object directoryId;
        java.lang.Object permissionPolicyName;
        java.lang.Object permissionPolicyType;
        java.lang.Object inlinePolicyDocument;

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getAccessConfigurationId}
         * @param accessConfigurationId Property accessConfigurationId: The ID of the access configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(java.lang.String accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getAccessConfigurationId}
         * @param accessConfigurationId Property accessConfigurationId: The ID of the access configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(com.aliyun.ros.cdk.core.IResolvable accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getPermissionPolicyName}
         * @param permissionPolicyName Property permissionPolicyName: The name of the permission policy. This parameter is required.
         *                             <ul>
         *                             <li>If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.</li>
         *                             <li>If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder permissionPolicyName(java.lang.String permissionPolicyName) {
            this.permissionPolicyName = permissionPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getPermissionPolicyName}
         * @param permissionPolicyName Property permissionPolicyName: The name of the permission policy. This parameter is required.
         *                             <ul>
         *                             <li>If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.</li>
         *                             <li>If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder permissionPolicyName(com.aliyun.ros.cdk.core.IResolvable permissionPolicyName) {
            this.permissionPolicyName = permissionPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getPermissionPolicyType}
         * @param permissionPolicyType Property permissionPolicyType: The type of the permission policy. This parameter is required.
         *                             Valid values:
         *                             <p>
         *                             <ul>
         *                             <li>System: system policy. Resource Access Management (RAM) system policies are reused.</li>
         *                             <li>Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder permissionPolicyType(java.lang.String permissionPolicyType) {
            this.permissionPolicyType = permissionPolicyType;
            return this;
        }

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getPermissionPolicyType}
         * @param permissionPolicyType Property permissionPolicyType: The type of the permission policy. This parameter is required.
         *                             Valid values:
         *                             <p>
         *                             <ul>
         *                             <li>System: system policy. Resource Access Management (RAM) system policies are reused.</li>
         *                             <li>Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder permissionPolicyType(com.aliyun.ros.cdk.core.IResolvable permissionPolicyType) {
            this.permissionPolicyType = permissionPolicyType;
            return this;
        }

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getInlinePolicyDocument}
         * @param inlinePolicyDocument Property inlinePolicyDocument: The configurations of the inline policy.
         *                             The value can be up to 4,096 characters in length.
         *                             If you set PermissionPolicyType to Inline, you must specify this parameter.
         * @return {@code this}
         */
        public Builder inlinePolicyDocument(com.aliyun.ros.cdk.core.IResolvable inlinePolicyDocument) {
            this.inlinePolicyDocument = inlinePolicyDocument;
            return this;
        }

        /**
         * Sets the value of {@link PermissionPolicyToAccessConfigurationAdditionProps#getInlinePolicyDocument}
         * @param inlinePolicyDocument Property inlinePolicyDocument: The configurations of the inline policy.
         *                             The value can be up to 4,096 characters in length.
         *                             If you set PermissionPolicyType to Inline, you must specify this parameter.
         * @return {@code this}
         */
        public Builder inlinePolicyDocument(java.util.Map<java.lang.String, ? extends java.lang.Object> inlinePolicyDocument) {
            this.inlinePolicyDocument = inlinePolicyDocument;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PermissionPolicyToAccessConfigurationAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PermissionPolicyToAccessConfigurationAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PermissionPolicyToAccessConfigurationAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PermissionPolicyToAccessConfigurationAdditionProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.PermissionPolicyToAccessConfigurationAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PermissionPolicyToAccessConfigurationAdditionProps.Jsii$Proxy that = (PermissionPolicyToAccessConfigurationAdditionProps.Jsii$Proxy) o;

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
