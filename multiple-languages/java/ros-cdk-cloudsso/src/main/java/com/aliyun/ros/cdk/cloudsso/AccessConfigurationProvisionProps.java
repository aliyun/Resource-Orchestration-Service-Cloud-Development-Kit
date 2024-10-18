package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>AccessConfigurationProvision</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.595Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.AccessConfigurationProvisionProps")
@software.amazon.jsii.Jsii.Proxy(AccessConfigurationProvisionProps.Jsii$Proxy.class)
public interface AccessConfigurationProvisionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessConfigurationId: The ID of the access configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessConfigurationId();

    /**
     * Property directoryId: The ID of the directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     * Property targetId: The ID of the task object.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetId();

    /**
     * Property targetType: The type of the task object.
     * <p>
     * Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetType();

    /**
     * @return a {@link Builder} of {@link AccessConfigurationProvisionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessConfigurationProvisionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessConfigurationProvisionProps> {
        java.lang.Object accessConfigurationId;
        java.lang.Object directoryId;
        java.lang.Object targetId;
        java.lang.Object targetType;

        /**
         * Sets the value of {@link AccessConfigurationProvisionProps#getAccessConfigurationId}
         * @param accessConfigurationId Property accessConfigurationId: The ID of the access configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(java.lang.String accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link AccessConfigurationProvisionProps#getAccessConfigurationId}
         * @param accessConfigurationId Property accessConfigurationId: The ID of the access configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(com.aliyun.ros.cdk.core.IResolvable accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link AccessConfigurationProvisionProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link AccessConfigurationProvisionProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link AccessConfigurationProvisionProps#getTargetId}
         * @param targetId Property targetId: The ID of the task object. This parameter is required.
         * @return {@code this}
         */
        public Builder targetId(java.lang.String targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link AccessConfigurationProvisionProps#getTargetId}
         * @param targetId Property targetId: The ID of the task object. This parameter is required.
         * @return {@code this}
         */
        public Builder targetId(com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link AccessConfigurationProvisionProps#getTargetType}
         * @param targetType Property targetType: The type of the task object. This parameter is required.
         *                   Set the value to RD-Account, which specifies the accounts in the resource directory.
         * @return {@code this}
         */
        public Builder targetType(java.lang.String targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link AccessConfigurationProvisionProps#getTargetType}
         * @param targetType Property targetType: The type of the task object. This parameter is required.
         *                   Set the value to RD-Account, which specifies the accounts in the resource directory.
         * @return {@code this}
         */
        public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessConfigurationProvisionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessConfigurationProvisionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccessConfigurationProvisionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessConfigurationProvisionProps {
        private final java.lang.Object accessConfigurationId;
        private final java.lang.Object directoryId;
        private final java.lang.Object targetId;
        private final java.lang.Object targetType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessConfigurationId = software.amazon.jsii.Kernel.get(this, "accessConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetId = software.amazon.jsii.Kernel.get(this, "targetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetType = software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessConfigurationId = java.util.Objects.requireNonNull(builder.accessConfigurationId, "accessConfigurationId is required");
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.targetId = java.util.Objects.requireNonNull(builder.targetId, "targetId is required");
            this.targetType = java.util.Objects.requireNonNull(builder.targetType, "targetType is required");
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
        public final java.lang.Object getTargetId() {
            return this.targetId;
        }

        @Override
        public final java.lang.Object getTargetType() {
            return this.targetType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessConfigurationId", om.valueToTree(this.getAccessConfigurationId()));
            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            data.set("targetId", om.valueToTree(this.getTargetId()));
            data.set("targetType", om.valueToTree(this.getTargetType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.AccessConfigurationProvisionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessConfigurationProvisionProps.Jsii$Proxy that = (AccessConfigurationProvisionProps.Jsii$Proxy) o;

            if (!accessConfigurationId.equals(that.accessConfigurationId)) return false;
            if (!directoryId.equals(that.directoryId)) return false;
            if (!targetId.equals(that.targetId)) return false;
            return this.targetType.equals(that.targetType);
        }

        @Override
        public final int hashCode() {
            int result = this.accessConfigurationId.hashCode();
            result = 31 * result + (this.directoryId.hashCode());
            result = 31 * result + (this.targetId.hashCode());
            result = 31 * result + (this.targetType.hashCode());
            return result;
        }
    }
}
