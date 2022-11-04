package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroupInstances`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:41.498Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMonitorGroupInstancesProps")
@software.amazon.jsii.Jsii.Proxy(RosMonitorGroupInstancesProps.Jsii$Proxy.class)
public interface RosMonitorGroupInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstances();

    /**
     * @return a {@link Builder} of {@link RosMonitorGroupInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMonitorGroupInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMonitorGroupInstancesProps> {
        java.lang.Object groupId;
        java.lang.Object instances;

        /**
         * Sets the value of {@link RosMonitorGroupInstancesProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorGroupInstancesProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorGroupInstancesProps#getInstances}
         * @param instances the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instances(com.aliyun.ros.cdk.core.IResolvable instances) {
            this.instances = instances;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorGroupInstancesProps#getInstances}
         * @param instances the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instances(java.util.List<? extends java.lang.Object> instances) {
            this.instances = instances;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMonitorGroupInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMonitorGroupInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMonitorGroupInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMonitorGroupInstancesProps {
        private final java.lang.Object groupId;
        private final java.lang.Object instances;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instances = software.amazon.jsii.Kernel.get(this, "instances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.instances = java.util.Objects.requireNonNull(builder.instances, "instances is required");
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getInstances() {
            return this.instances;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("instances", om.valueToTree(this.getInstances()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosMonitorGroupInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMonitorGroupInstancesProps.Jsii$Proxy that = (RosMonitorGroupInstancesProps.Jsii$Proxy) o;

            if (!groupId.equals(that.groupId)) return false;
            return this.instances.equals(that.instances);
        }

        @Override
        public final int hashCode() {
            int result = this.groupId.hashCode();
            result = 31 * result + (this.instances.hashCode());
            return result;
        }
    }
}
