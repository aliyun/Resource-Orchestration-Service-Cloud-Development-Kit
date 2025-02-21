package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>RosAccessLogsAddition</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesslogsaddition
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:20.711Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosAccessLogsAdditionProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessLogsAdditionProps.Jsii$Proxy.class)
public interface RosAccessLogsAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogProject();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogStore();

    /**
     * @return a {@link Builder} of {@link RosAccessLogsAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccessLogsAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccessLogsAdditionProps> {
        java.lang.Object loadBalancerId;
        java.lang.Object logProject;
        java.lang.Object logStore;

        /**
         * Sets the value of {@link RosAccessLogsAdditionProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessLogsAdditionProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessLogsAdditionProps#getLogProject}
         * @param logProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logProject(java.lang.String logProject) {
            this.logProject = logProject;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessLogsAdditionProps#getLogProject}
         * @param logProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logProject(com.aliyun.ros.cdk.core.IResolvable logProject) {
            this.logProject = logProject;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessLogsAdditionProps#getLogStore}
         * @param logStore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logStore(java.lang.String logStore) {
            this.logStore = logStore;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessLogsAdditionProps#getLogStore}
         * @param logStore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logStore(com.aliyun.ros.cdk.core.IResolvable logStore) {
            this.logStore = logStore;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccessLogsAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccessLogsAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccessLogsAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessLogsAdditionProps {
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object logProject;
        private final java.lang.Object logStore;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logProject = software.amazon.jsii.Kernel.get(this, "logProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logStore = software.amazon.jsii.Kernel.get(this, "logStore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.logProject = java.util.Objects.requireNonNull(builder.logProject, "logProject is required");
            this.logStore = java.util.Objects.requireNonNull(builder.logStore, "logStore is required");
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getLogProject() {
            return this.logProject;
        }

        @Override
        public final java.lang.Object getLogStore() {
            return this.logStore;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("logProject", om.valueToTree(this.getLogProject()));
            data.set("logStore", om.valueToTree(this.getLogStore()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosAccessLogsAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccessLogsAdditionProps.Jsii$Proxy that = (RosAccessLogsAdditionProps.Jsii$Proxy) o;

            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (!logProject.equals(that.logProject)) return false;
            return this.logStore.equals(that.logStore);
        }

        @Override
        public final int hashCode() {
            int result = this.loadBalancerId.hashCode();
            result = 31 * result + (this.logProject.hashCode());
            result = 31 * result + (this.logStore.hashCode());
            return result;
        }
    }
}
