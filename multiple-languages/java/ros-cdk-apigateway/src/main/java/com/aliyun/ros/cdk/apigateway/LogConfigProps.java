package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::LogConfig`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.291Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.LogConfigProps")
@software.amazon.jsii.Jsii.Proxy(LogConfigProps.Jsii$Proxy.class)
public interface LogConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property slsLogStore: Logstore name of SLS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsLogStore();

    /**
     * Property slsProject: Project name of SLS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsProject();

    /**
     * @return a {@link Builder} of {@link LogConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LogConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LogConfigProps> {
        private java.lang.Object slsLogStore;
        private java.lang.Object slsProject;

        /**
         * Sets the value of {@link LogConfigProps#getSlsLogStore}
         * @param slsLogStore Property slsLogStore: Logstore name of SLS. This parameter is required.
         * @return {@code this}
         */
        public Builder slsLogStore(java.lang.String slsLogStore) {
            this.slsLogStore = slsLogStore;
            return this;
        }

        /**
         * Sets the value of {@link LogConfigProps#getSlsLogStore}
         * @param slsLogStore Property slsLogStore: Logstore name of SLS. This parameter is required.
         * @return {@code this}
         */
        public Builder slsLogStore(com.aliyun.ros.cdk.core.IResolvable slsLogStore) {
            this.slsLogStore = slsLogStore;
            return this;
        }

        /**
         * Sets the value of {@link LogConfigProps#getSlsProject}
         * @param slsProject Property slsProject: Project name of SLS. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProject(java.lang.String slsProject) {
            this.slsProject = slsProject;
            return this;
        }

        /**
         * Sets the value of {@link LogConfigProps#getSlsProject}
         * @param slsProject Property slsProject: Project name of SLS. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProject(com.aliyun.ros.cdk.core.IResolvable slsProject) {
            this.slsProject = slsProject;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LogConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LogConfigProps build() {
            return new Jsii$Proxy(slsLogStore, slsProject);
        }
    }

    /**
     * An implementation for {@link LogConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogConfigProps {
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
        protected Jsii$Proxy(final java.lang.Object slsLogStore, final java.lang.Object slsProject) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.slsLogStore = java.util.Objects.requireNonNull(slsLogStore, "slsLogStore is required");
            this.slsProject = java.util.Objects.requireNonNull(slsProject, "slsProject is required");
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.LogConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LogConfigProps.Jsii$Proxy that = (LogConfigProps.Jsii$Proxy) o;

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
