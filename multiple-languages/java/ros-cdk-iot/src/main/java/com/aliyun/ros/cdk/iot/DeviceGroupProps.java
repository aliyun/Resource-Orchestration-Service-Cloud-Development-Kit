package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a `ALIYUN::IOT::DeviceGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:04.708Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.DeviceGroupProps")
@software.amazon.jsii.Jsii.Proxy(DeviceGroupProps.Jsii$Proxy.class)
public interface DeviceGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupName: The name of the group.
     * <p>
     * The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * Property groupDesc: The description of the group.
     * <p>
     * You can enter a description with up to 100 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupDesc() {
        return null;
    }

    /**
     * Property iotInstanceId: Public instance does not pass this parameter;
     * <p>
     * instance that you need to buy the incoming instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     * Property superGroupId: The ID of the parent group.
     * <p>
     * If you want to create a first-level group, do not enter this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSuperGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DeviceGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DeviceGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DeviceGroupProps> {
        java.lang.Object groupName;
        java.lang.Object groupDesc;
        java.lang.Object iotInstanceId;
        java.lang.Object superGroupId;

        /**
         * Sets the value of {@link DeviceGroupProps#getGroupName}
         * @param groupName Property groupName: The name of the group. This parameter is required.
         *                  The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link DeviceGroupProps#getGroupName}
         * @param groupName Property groupName: The name of the group. This parameter is required.
         *                  The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link DeviceGroupProps#getGroupDesc}
         * @param groupDesc Property groupDesc: The description of the group.
         *                  You can enter a description with up to 100 characters.
         * @return {@code this}
         */
        public Builder groupDesc(java.lang.String groupDesc) {
            this.groupDesc = groupDesc;
            return this;
        }

        /**
         * Sets the value of {@link DeviceGroupProps#getGroupDesc}
         * @param groupDesc Property groupDesc: The description of the group.
         *                  You can enter a description with up to 100 characters.
         * @return {@code this}
         */
        public Builder groupDesc(com.aliyun.ros.cdk.core.IResolvable groupDesc) {
            this.groupDesc = groupDesc;
            return this;
        }

        /**
         * Sets the value of {@link DeviceGroupProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;.
         *                      instance that you need to buy the incoming instance ID.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DeviceGroupProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;.
         *                      instance that you need to buy the incoming instance ID.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DeviceGroupProps#getSuperGroupId}
         * @param superGroupId Property superGroupId: The ID of the parent group.
         *                     If you want to create a first-level group, do not enter this parameter.
         * @return {@code this}
         */
        public Builder superGroupId(java.lang.String superGroupId) {
            this.superGroupId = superGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DeviceGroupProps#getSuperGroupId}
         * @param superGroupId Property superGroupId: The ID of the parent group.
         *                     If you want to create a first-level group, do not enter this parameter.
         * @return {@code this}
         */
        public Builder superGroupId(com.aliyun.ros.cdk.core.IResolvable superGroupId) {
            this.superGroupId = superGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DeviceGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DeviceGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DeviceGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeviceGroupProps {
        private final java.lang.Object groupName;
        private final java.lang.Object groupDesc;
        private final java.lang.Object iotInstanceId;
        private final java.lang.Object superGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupDesc = software.amazon.jsii.Kernel.get(this, "groupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.superGroupId = software.amazon.jsii.Kernel.get(this, "superGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.groupDesc = builder.groupDesc;
            this.iotInstanceId = builder.iotInstanceId;
            this.superGroupId = builder.superGroupId;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getGroupDesc() {
            return this.groupDesc;
        }

        @Override
        public final java.lang.Object getIotInstanceId() {
            return this.iotInstanceId;
        }

        @Override
        public final java.lang.Object getSuperGroupId() {
            return this.superGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupName", om.valueToTree(this.getGroupName()));
            if (this.getGroupDesc() != null) {
                data.set("groupDesc", om.valueToTree(this.getGroupDesc()));
            }
            if (this.getIotInstanceId() != null) {
                data.set("iotInstanceId", om.valueToTree(this.getIotInstanceId()));
            }
            if (this.getSuperGroupId() != null) {
                data.set("superGroupId", om.valueToTree(this.getSuperGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.DeviceGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DeviceGroupProps.Jsii$Proxy that = (DeviceGroupProps.Jsii$Proxy) o;

            if (!groupName.equals(that.groupName)) return false;
            if (this.groupDesc != null ? !this.groupDesc.equals(that.groupDesc) : that.groupDesc != null) return false;
            if (this.iotInstanceId != null ? !this.iotInstanceId.equals(that.iotInstanceId) : that.iotInstanceId != null) return false;
            return this.superGroupId != null ? this.superGroupId.equals(that.superGroupId) : that.superGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupName.hashCode();
            result = 31 * result + (this.groupDesc != null ? this.groupDesc.hashCode() : 0);
            result = 31 * result + (this.iotInstanceId != null ? this.iotInstanceId.hashCode() : 0);
            result = 31 * result + (this.superGroupId != null ? this.superGroupId.hashCode() : 0);
            return result;
        }
    }
}
