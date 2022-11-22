package com.aliyun.ros.cdk.rocketmq;

/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Group`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:30.185Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq.RosGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosGroupProps.Jsii$Proxy.class)
public interface RosGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGroupProps> {
        java.lang.Object groupId;
        java.lang.Object instanceId;
        java.lang.Object groupType;
        java.lang.Object remark;

        /**
         * Sets the value of {@link RosGroupProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getGroupType}
         * @param groupType the value to be set.
         * @return {@code this}
         */
        public Builder groupType(java.lang.String groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getGroupType}
         * @param groupType the value to be set.
         * @return {@code this}
         */
        public Builder groupType(com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGroupProps {
        private final java.lang.Object groupId;
        private final java.lang.Object instanceId;
        private final java.lang.Object groupType;
        private final java.lang.Object remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupType = software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.groupType = builder.groupType;
            this.remark = builder.remark;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getGroupType() {
            return this.groupType;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getGroupType() != null) {
                data.set("groupType", om.valueToTree(this.getGroupType()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq.RosGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGroupProps.Jsii$Proxy that = (RosGroupProps.Jsii$Proxy) o;

            if (!groupId.equals(that.groupId)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (this.groupType != null ? !this.groupType.equals(that.groupType) : that.groupType != null) return false;
            return this.remark != null ? this.remark.equals(that.remark) : that.remark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupId.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.groupType != null ? this.groupType.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            return result;
        }
    }
}
