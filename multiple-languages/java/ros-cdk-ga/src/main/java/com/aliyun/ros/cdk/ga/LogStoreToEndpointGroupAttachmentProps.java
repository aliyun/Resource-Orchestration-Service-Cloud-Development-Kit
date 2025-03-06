package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>LogStoreToEndpointGroupAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.145Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.LogStoreToEndpointGroupAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(LogStoreToEndpointGroupAttachmentProps.Jsii$Proxy.class)
public interface LogStoreToEndpointGroupAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorId: Global Acceleration Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * Property endpointGroupIds: Endpoint Group ID List.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupIds();

    /**
     * Property listenerId: Listener ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     * Property slsLogStoreName: SLS log library name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsLogStoreName();

    /**
     * Property slsProjectName: SLS project name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsProjectName();

    /**
     * Property slsRegionId: SLS Region ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsRegionId();

    /**
     * @return a {@link Builder} of {@link LogStoreToEndpointGroupAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LogStoreToEndpointGroupAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LogStoreToEndpointGroupAttachmentProps> {
        java.lang.Object acceleratorId;
        java.lang.Object endpointGroupIds;
        java.lang.Object listenerId;
        java.lang.Object slsLogStoreName;
        java.lang.Object slsProjectName;
        java.lang.Object slsRegionId;

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: Global Acceleration Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: Global Acceleration Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getEndpointGroupIds}
         * @param endpointGroupIds Property endpointGroupIds: Endpoint Group ID List. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupIds(com.aliyun.ros.cdk.core.IResolvable endpointGroupIds) {
            this.endpointGroupIds = endpointGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getEndpointGroupIds}
         * @param endpointGroupIds Property endpointGroupIds: Endpoint Group ID List. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupIds(java.util.List<? extends java.lang.Object> endpointGroupIds) {
            this.endpointGroupIds = endpointGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getListenerId}
         * @param listenerId Property listenerId: Listener ID. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getListenerId}
         * @param listenerId Property listenerId: Listener ID. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getSlsLogStoreName}
         * @param slsLogStoreName Property slsLogStoreName: SLS log library name. This parameter is required.
         * @return {@code this}
         */
        public Builder slsLogStoreName(java.lang.String slsLogStoreName) {
            this.slsLogStoreName = slsLogStoreName;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getSlsLogStoreName}
         * @param slsLogStoreName Property slsLogStoreName: SLS log library name. This parameter is required.
         * @return {@code this}
         */
        public Builder slsLogStoreName(com.aliyun.ros.cdk.core.IResolvable slsLogStoreName) {
            this.slsLogStoreName = slsLogStoreName;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getSlsProjectName}
         * @param slsProjectName Property slsProjectName: SLS project name. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProjectName(java.lang.String slsProjectName) {
            this.slsProjectName = slsProjectName;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getSlsProjectName}
         * @param slsProjectName Property slsProjectName: SLS project name. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProjectName(com.aliyun.ros.cdk.core.IResolvable slsProjectName) {
            this.slsProjectName = slsProjectName;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getSlsRegionId}
         * @param slsRegionId Property slsRegionId: SLS Region ID. This parameter is required.
         * @return {@code this}
         */
        public Builder slsRegionId(java.lang.String slsRegionId) {
            this.slsRegionId = slsRegionId;
            return this;
        }

        /**
         * Sets the value of {@link LogStoreToEndpointGroupAttachmentProps#getSlsRegionId}
         * @param slsRegionId Property slsRegionId: SLS Region ID. This parameter is required.
         * @return {@code this}
         */
        public Builder slsRegionId(com.aliyun.ros.cdk.core.IResolvable slsRegionId) {
            this.slsRegionId = slsRegionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LogStoreToEndpointGroupAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LogStoreToEndpointGroupAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LogStoreToEndpointGroupAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogStoreToEndpointGroupAttachmentProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object endpointGroupIds;
        private final java.lang.Object listenerId;
        private final java.lang.Object slsLogStoreName;
        private final java.lang.Object slsProjectName;
        private final java.lang.Object slsRegionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointGroupIds = software.amazon.jsii.Kernel.get(this, "endpointGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsLogStoreName = software.amazon.jsii.Kernel.get(this, "slsLogStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsProjectName = software.amazon.jsii.Kernel.get(this, "slsProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsRegionId = software.amazon.jsii.Kernel.get(this, "slsRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.endpointGroupIds = java.util.Objects.requireNonNull(builder.endpointGroupIds, "endpointGroupIds is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
            this.slsLogStoreName = java.util.Objects.requireNonNull(builder.slsLogStoreName, "slsLogStoreName is required");
            this.slsProjectName = java.util.Objects.requireNonNull(builder.slsProjectName, "slsProjectName is required");
            this.slsRegionId = java.util.Objects.requireNonNull(builder.slsRegionId, "slsRegionId is required");
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getEndpointGroupIds() {
            return this.endpointGroupIds;
        }

        @Override
        public final java.lang.Object getListenerId() {
            return this.listenerId;
        }

        @Override
        public final java.lang.Object getSlsLogStoreName() {
            return this.slsLogStoreName;
        }

        @Override
        public final java.lang.Object getSlsProjectName() {
            return this.slsProjectName;
        }

        @Override
        public final java.lang.Object getSlsRegionId() {
            return this.slsRegionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("endpointGroupIds", om.valueToTree(this.getEndpointGroupIds()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));
            data.set("slsLogStoreName", om.valueToTree(this.getSlsLogStoreName()));
            data.set("slsProjectName", om.valueToTree(this.getSlsProjectName()));
            data.set("slsRegionId", om.valueToTree(this.getSlsRegionId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.LogStoreToEndpointGroupAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LogStoreToEndpointGroupAttachmentProps.Jsii$Proxy that = (LogStoreToEndpointGroupAttachmentProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!endpointGroupIds.equals(that.endpointGroupIds)) return false;
            if (!listenerId.equals(that.listenerId)) return false;
            if (!slsLogStoreName.equals(that.slsLogStoreName)) return false;
            if (!slsProjectName.equals(that.slsProjectName)) return false;
            return this.slsRegionId.equals(that.slsRegionId);
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.endpointGroupIds.hashCode());
            result = 31 * result + (this.listenerId.hashCode());
            result = 31 * result + (this.slsLogStoreName.hashCode());
            result = 31 * result + (this.slsProjectName.hashCode());
            result = 31 * result + (this.slsRegionId.hashCode());
            return result;
        }
    }
}
