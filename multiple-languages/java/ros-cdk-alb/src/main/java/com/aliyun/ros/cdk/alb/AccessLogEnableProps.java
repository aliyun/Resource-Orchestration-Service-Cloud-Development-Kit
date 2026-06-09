package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>AccessLogEnable</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-accesslogenable
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:22:24.172Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.AccessLogEnableProps")
@software.amazon.jsii.Jsii.Proxy(AccessLogEnableProps.Jsii$Proxy.class)
public interface AccessLogEnableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property loadBalancerId: The ID of the ALB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     * Property logProject: The name of the LogHub project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogProject();

    /**
     * Property logStore: The name of the LogHub logstore.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogStore();

    /**
     * @return a {@link Builder} of {@link AccessLogEnableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessLogEnableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessLogEnableProps> {
        java.lang.Object loadBalancerId;
        java.lang.Object logProject;
        java.lang.Object logStore;

        /**
         * Sets the value of {@link AccessLogEnableProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of the ALB instance. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link AccessLogEnableProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of the ALB instance. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link AccessLogEnableProps#getLogProject}
         * @param logProject Property logProject: The name of the LogHub project. This parameter is required.
         * @return {@code this}
         */
        public Builder logProject(java.lang.String logProject) {
            this.logProject = logProject;
            return this;
        }

        /**
         * Sets the value of {@link AccessLogEnableProps#getLogProject}
         * @param logProject Property logProject: The name of the LogHub project. This parameter is required.
         * @return {@code this}
         */
        public Builder logProject(com.aliyun.ros.cdk.core.IResolvable logProject) {
            this.logProject = logProject;
            return this;
        }

        /**
         * Sets the value of {@link AccessLogEnableProps#getLogStore}
         * @param logStore Property logStore: The name of the LogHub logstore. This parameter is required.
         * @return {@code this}
         */
        public Builder logStore(java.lang.String logStore) {
            this.logStore = logStore;
            return this;
        }

        /**
         * Sets the value of {@link AccessLogEnableProps#getLogStore}
         * @param logStore Property logStore: The name of the LogHub logstore. This parameter is required.
         * @return {@code this}
         */
        public Builder logStore(com.aliyun.ros.cdk.core.IResolvable logStore) {
            this.logStore = logStore;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessLogEnableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessLogEnableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccessLogEnableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessLogEnableProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.AccessLogEnableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessLogEnableProps.Jsii$Proxy that = (AccessLogEnableProps.Jsii$Proxy) o;

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
