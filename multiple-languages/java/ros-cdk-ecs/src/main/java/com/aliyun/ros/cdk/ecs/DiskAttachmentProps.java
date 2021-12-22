package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::DiskAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:57.540Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.DiskAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(DiskAttachmentProps.Jsii$Proxy.class)
public interface DiskAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property diskId: The disk id to attached.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskId();

    /**
     * Property instanceId: The instanceId to attach the disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
     * <p>
     * Default to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteAutoSnapshot() {
        return null;
    }

    /**
     * Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteWithInstance() {
        return null;
    }

    /**
     * Property device: The device where the volume is exposed on the instance.
     * <p>
     * could be /dev/xvd[b-z]. If not specification, will use default value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDevice() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DiskAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DiskAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DiskAttachmentProps> {
        java.lang.Object diskId;
        java.lang.Object instanceId;
        java.lang.Object deleteAutoSnapshot;
        java.lang.Object deleteWithInstance;
        java.lang.Object device;

        /**
         * Sets the value of {@link DiskAttachmentProps#getDiskId}
         * @param diskId Property diskId: The disk id to attached. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(java.lang.String diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link DiskAttachmentProps#getDiskId}
         * @param diskId Property diskId: The disk id to attached. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link DiskAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: The instanceId to attach the disk. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DiskAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: The instanceId to attach the disk. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DiskAttachmentProps#getDeleteAutoSnapshot}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
         *                           Default to true.
         * @return {@code this}
         */
        public Builder deleteAutoSnapshot(java.lang.Boolean deleteAutoSnapshot) {
            this.deleteAutoSnapshot = deleteAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link DiskAttachmentProps#getDeleteAutoSnapshot}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.
         *                           Default to true.
         * @return {@code this}
         */
        public Builder deleteAutoSnapshot(com.aliyun.ros.cdk.core.IResolvable deleteAutoSnapshot) {
            this.deleteAutoSnapshot = deleteAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link DiskAttachmentProps#getDeleteWithInstance}
         * @param deleteWithInstance Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
         * @return {@code this}
         */
        public Builder deleteWithInstance(java.lang.Boolean deleteWithInstance) {
            this.deleteWithInstance = deleteWithInstance;
            return this;
        }

        /**
         * Sets the value of {@link DiskAttachmentProps#getDeleteWithInstance}
         * @param deleteWithInstance Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
         * @return {@code this}
         */
        public Builder deleteWithInstance(com.aliyun.ros.cdk.core.IResolvable deleteWithInstance) {
            this.deleteWithInstance = deleteWithInstance;
            return this;
        }

        /**
         * Sets the value of {@link DiskAttachmentProps#getDevice}
         * @param device Property device: The device where the volume is exposed on the instance.
         *               could be /dev/xvd[b-z]. If not specification, will use default value.
         * @return {@code this}
         */
        public Builder device(java.lang.String device) {
            this.device = device;
            return this;
        }

        /**
         * Sets the value of {@link DiskAttachmentProps#getDevice}
         * @param device Property device: The device where the volume is exposed on the instance.
         *               could be /dev/xvd[b-z]. If not specification, will use default value.
         * @return {@code this}
         */
        public Builder device(com.aliyun.ros.cdk.core.IResolvable device) {
            this.device = device;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DiskAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DiskAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DiskAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskAttachmentProps {
        private final java.lang.Object diskId;
        private final java.lang.Object instanceId;
        private final java.lang.Object deleteAutoSnapshot;
        private final java.lang.Object deleteWithInstance;
        private final java.lang.Object device;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.diskId = software.amazon.jsii.Kernel.get(this, "diskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteAutoSnapshot = software.amazon.jsii.Kernel.get(this, "deleteAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteWithInstance = software.amazon.jsii.Kernel.get(this, "deleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.device = software.amazon.jsii.Kernel.get(this, "device", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.diskId = java.util.Objects.requireNonNull(builder.diskId, "diskId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.deleteAutoSnapshot = builder.deleteAutoSnapshot;
            this.deleteWithInstance = builder.deleteWithInstance;
            this.device = builder.device;
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
        public final java.lang.Object getDeleteAutoSnapshot() {
            return this.deleteAutoSnapshot;
        }

        @Override
        public final java.lang.Object getDeleteWithInstance() {
            return this.deleteWithInstance;
        }

        @Override
        public final java.lang.Object getDevice() {
            return this.device;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("diskId", om.valueToTree(this.getDiskId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getDeleteAutoSnapshot() != null) {
                data.set("deleteAutoSnapshot", om.valueToTree(this.getDeleteAutoSnapshot()));
            }
            if (this.getDeleteWithInstance() != null) {
                data.set("deleteWithInstance", om.valueToTree(this.getDeleteWithInstance()));
            }
            if (this.getDevice() != null) {
                data.set("device", om.valueToTree(this.getDevice()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.DiskAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DiskAttachmentProps.Jsii$Proxy that = (DiskAttachmentProps.Jsii$Proxy) o;

            if (!diskId.equals(that.diskId)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (this.deleteAutoSnapshot != null ? !this.deleteAutoSnapshot.equals(that.deleteAutoSnapshot) : that.deleteAutoSnapshot != null) return false;
            if (this.deleteWithInstance != null ? !this.deleteWithInstance.equals(that.deleteWithInstance) : that.deleteWithInstance != null) return false;
            return this.device != null ? this.device.equals(that.device) : that.device == null;
        }

        @Override
        public final int hashCode() {
            int result = this.diskId.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.deleteAutoSnapshot != null ? this.deleteAutoSnapshot.hashCode() : 0);
            result = 31 * result + (this.deleteWithInstance != null ? this.deleteWithInstance.hashCode() : 0);
            result = 31 * result + (this.device != null ? this.device.hashCode() : 0);
            return result;
        }
    }
}
