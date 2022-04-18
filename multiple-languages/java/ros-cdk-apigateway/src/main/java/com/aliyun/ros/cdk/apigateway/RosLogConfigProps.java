package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::LogConfig`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:24.602Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosLogConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosLogConfigProps.Jsii$Proxy.class)
public interface RosLogConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsLogStore();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsProject();

    /**
     * @return a {@link Builder} of {@link RosLogConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLogConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLogConfigProps> {
        java.lang.Object slsLogStore;
        java.lang.Object slsProject;

        /**
         * Sets the value of {@link RosLogConfigProps#getSlsLogStore}
         * @param slsLogStore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsLogStore(java.lang.String slsLogStore) {
            this.slsLogStore = slsLogStore;
            return this;
        }

        /**
         * Sets the value of {@link RosLogConfigProps#getSlsLogStore}
         * @param slsLogStore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsLogStore(com.aliyun.ros.cdk.core.IResolvable slsLogStore) {
            this.slsLogStore = slsLogStore;
            return this;
        }

        /**
         * Sets the value of {@link RosLogConfigProps#getSlsProject}
         * @param slsProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProject(java.lang.String slsProject) {
            this.slsProject = slsProject;
            return this;
        }

        /**
         * Sets the value of {@link RosLogConfigProps#getSlsProject}
         * @param slsProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProject(com.aliyun.ros.cdk.core.IResolvable slsProject) {
            this.slsProject = slsProject;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLogConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLogConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLogConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLogConfigProps {
        private final java.lang.Object slsLogStore;
        private final java.lang.Object slsProject;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.slsLogStore = software.amazon.jsii.Kernel.get(this, "slsLogStore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsProject = software.amazon.jsii.Kernel.get(this, "slsProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.slsLogStore = java.util.Objects.requireNonNull(builder.slsLogStore, "slsLogStore is required");
            this.slsProject = java.util.Objects.requireNonNull(builder.slsProject, "slsProject is required");
        }

        @Override
        public final java.lang.Object getSlsLogStore() {
            return this.slsLogStore;
        }

        @Override
        public final java.lang.Object getSlsProject() {
            return this.slsProject;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("slsLogStore", om.valueToTree(this.getSlsLogStore()));
            data.set("slsProject", om.valueToTree(this.getSlsProject()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosLogConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLogConfigProps.Jsii$Proxy that = (RosLogConfigProps.Jsii$Proxy) o;

            if (!slsLogStore.equals(that.slsLogStore)) return false;
            return this.slsProject.equals(that.slsProject);
        }

        @Override
        public final int hashCode() {
            int result = this.slsLogStore.hashCode();
            result = 31 * result + (this.slsProject.hashCode());
            return result;
        }
    }
}
