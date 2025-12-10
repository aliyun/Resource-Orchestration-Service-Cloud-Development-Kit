package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a <code>RosDiskInstanceAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.368Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.RosDiskInstanceAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosDiskInstanceAttachmentProps.Jsii$Proxy.class)
public interface RosDiskInstanceAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteWithInstance() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDiskInstanceAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDiskInstanceAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDiskInstanceAttachmentProps> {
        java.lang.Object diskId;
        java.lang.Object instanceId;
        java.lang.Object deleteWithInstance;

        /**
         * Sets the value of {@link RosDiskInstanceAttachmentProps#getDiskId}
         * @param diskId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(java.lang.String diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskInstanceAttachmentProps#getDiskId}
         * @param diskId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskInstanceAttachmentProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskInstanceAttachmentProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskInstanceAttachmentProps#getDeleteWithInstance}
         * @param deleteWithInstance the value to be set.
         * @return {@code this}
         */
        public Builder deleteWithInstance(java.lang.String deleteWithInstance) {
            this.deleteWithInstance = deleteWithInstance;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskInstanceAttachmentProps#getDeleteWithInstance}
         * @param deleteWithInstance the value to be set.
         * @return {@code this}
         */
        public Builder deleteWithInstance(com.aliyun.ros.cdk.core.IResolvable deleteWithInstance) {
            this.deleteWithInstance = deleteWithInstance;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDiskInstanceAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDiskInstanceAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDiskInstanceAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDiskInstanceAttachmentProps {
        private final java.lang.Object diskId;
        private final java.lang.Object instanceId;
        private final java.lang.Object deleteWithInstance;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.diskId = software.amazon.jsii.Kernel.get(this, "diskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteWithInstance = software.amazon.jsii.Kernel.get(this, "deleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.diskId = java.util.Objects.requireNonNull(builder.diskId, "diskId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.deleteWithInstance = builder.deleteWithInstance;
        }

        @Override
        public final java.lang.Object getDiskId() {
            return this.diskId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getDeleteWithInstance() {
            return this.deleteWithInstance;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("diskId", om.valueToTree(this.getDiskId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getDeleteWithInstance() != null) {
                data.set("deleteWithInstance", om.valueToTree(this.getDeleteWithInstance()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.RosDiskInstanceAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDiskInstanceAttachmentProps.Jsii$Proxy that = (RosDiskInstanceAttachmentProps.Jsii$Proxy) o;

            if (!diskId.equals(that.diskId)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            return this.deleteWithInstance != null ? this.deleteWithInstance.equals(that.deleteWithInstance) : that.deleteWithInstance == null;
        }

        @Override
        public final int hashCode() {
            int result = this.diskId.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.deleteWithInstance != null ? this.deleteWithInstance.hashCode() : 0);
            return result;
        }
    }
}
