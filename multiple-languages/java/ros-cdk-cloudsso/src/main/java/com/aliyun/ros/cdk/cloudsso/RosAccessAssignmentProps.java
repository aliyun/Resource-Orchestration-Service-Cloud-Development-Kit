package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>RosAccessAssignment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.604Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosAccessAssignmentProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessAssignmentProps.Jsii$Proxy.class)
public interface RosAccessAssignmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessConfigurationId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetType();

    /**
     * @return a {@link Builder} of {@link RosAccessAssignmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccessAssignmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccessAssignmentProps> {
        java.lang.Object accessConfigurationId;
        java.lang.Object directoryId;
        java.lang.Object principalId;
        java.lang.Object principalType;
        java.lang.Object targetId;
        java.lang.Object targetType;

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getAccessConfigurationId}
         * @param accessConfigurationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(java.lang.String accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getAccessConfigurationId}
         * @param accessConfigurationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessConfigurationId(com.aliyun.ros.cdk.core.IResolvable accessConfigurationId) {
            this.accessConfigurationId = accessConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getPrincipalId}
         * @param principalId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder principalId(java.lang.String principalId) {
            this.principalId = principalId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getPrincipalId}
         * @param principalId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder principalId(com.aliyun.ros.cdk.core.IResolvable principalId) {
            this.principalId = principalId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getPrincipalType}
         * @param principalType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder principalType(java.lang.String principalType) {
            this.principalType = principalType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getPrincipalType}
         * @param principalType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder principalType(com.aliyun.ros.cdk.core.IResolvable principalType) {
            this.principalType = principalType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getTargetId}
         * @param targetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetId(java.lang.String targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getTargetId}
         * @param targetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetId(com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getTargetType}
         * @param targetType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetType(java.lang.String targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessAssignmentProps#getTargetType}
         * @param targetType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccessAssignmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccessAssignmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccessAssignmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessAssignmentProps {
        private final java.lang.Object accessConfigurationId;
        private final java.lang.Object directoryId;
        private final java.lang.Object principalId;
        private final java.lang.Object principalType;
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
            this.principalId = software.amazon.jsii.Kernel.get(this, "principalId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.principalType = software.amazon.jsii.Kernel.get(this, "principalType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.principalId = java.util.Objects.requireNonNull(builder.principalId, "principalId is required");
            this.principalType = java.util.Objects.requireNonNull(builder.principalType, "principalType is required");
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
        public final java.lang.Object getPrincipalId() {
            return this.principalId;
        }

        @Override
        public final java.lang.Object getPrincipalType() {
            return this.principalType;
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
            data.set("principalId", om.valueToTree(this.getPrincipalId()));
            data.set("principalType", om.valueToTree(this.getPrincipalType()));
            data.set("targetId", om.valueToTree(this.getTargetId()));
            data.set("targetType", om.valueToTree(this.getTargetType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.RosAccessAssignmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccessAssignmentProps.Jsii$Proxy that = (RosAccessAssignmentProps.Jsii$Proxy) o;

            if (!accessConfigurationId.equals(that.accessConfigurationId)) return false;
            if (!directoryId.equals(that.directoryId)) return false;
            if (!principalId.equals(that.principalId)) return false;
            if (!principalType.equals(that.principalType)) return false;
            if (!targetId.equals(that.targetId)) return false;
            return this.targetType.equals(that.targetType);
        }

        @Override
        public final int hashCode() {
            int result = this.accessConfigurationId.hashCode();
            result = 31 * result + (this.directoryId.hashCode());
            result = 31 * result + (this.principalId.hashCode());
            result = 31 * result + (this.principalType.hashCode());
            result = 31 * result + (this.targetId.hashCode());
            result = 31 * result + (this.targetType.hashCode());
            return result;
        }
    }
}
