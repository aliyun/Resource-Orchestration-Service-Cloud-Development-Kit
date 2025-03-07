package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>RosAccessConfigurationProvision</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.920Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProvisionProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessConfigurationProvisionProps.Jsii$Proxy.class)
public interface RosAccessConfigurationProvisionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessConfigurationId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetType();

    /**
     * @return a {@link Builder} of {@link RosAccessConfigurationProvisionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccessConfigurationProvisionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccessConfigurationProvisionProps> {
        java.lang.Object accessConfigurationId;
        java.lang.Object directoryId;
        java.lang.Object targetId;
        java.lang.Object targetType;

        /**
         * Sets the value of {@link RosAccessConfigurationProvisionProps#getAccessConfigurationId}
         * @param accessConfigurationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(java.lang.String accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProvisionProps#getAccessConfigurationId}
         * @param accessConfigurationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(com.aliyun.ros.cdk.core.IResolvable accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProvisionProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProvisionProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProvisionProps#getTargetId}
         * @param targetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetId(java.lang.String targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProvisionProps#getTargetId}
         * @param targetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetId(com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProvisionProps#getTargetType}
         * @param targetType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetType(java.lang.String targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessConfigurationProvisionProps#getTargetType}
         * @param targetType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccessConfigurationProvisionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccessConfigurationProvisionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccessConfigurationProvisionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessConfigurationProvisionProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProvisionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccessConfigurationProvisionProps.Jsii$Proxy that = (RosAccessConfigurationProvisionProps.Jsii$Proxy) o;

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
