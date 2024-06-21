package com.aliyun.ros.cdk.sls.datasource;

/**
 * Properties for defining a <code>Logstores</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.506Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.datasource.LogstoresProps")
@software.amazon.jsii.Jsii.Proxy(LogstoresProps.Jsii$Proxy.class)
public interface LogstoresProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property project: Project name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProject();

    /**
     * Property logstoreName: Logstore name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogstoreName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LogstoresProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LogstoresProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LogstoresProps> {
        java.lang.Object project;
        java.lang.Object logstoreName;

        /**
         * Sets the value of {@link LogstoresProps#getProject}
         * @param project Property project: Project name. This parameter is required.
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link LogstoresProps#getProject}
         * @param project Property project: Project name. This parameter is required.
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link LogstoresProps#getLogstoreName}
         * @param logstoreName Property logstoreName: Logstore name.
         * @return {@code this}
         */
        public Builder logstoreName(java.lang.String logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link LogstoresProps#getLogstoreName}
         * @param logstoreName Property logstoreName: Logstore name.
         * @return {@code this}
         */
        public Builder logstoreName(com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LogstoresProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LogstoresProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LogstoresProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogstoresProps {
        private final java.lang.Object project;
        private final java.lang.Object logstoreName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logstoreName = software.amazon.jsii.Kernel.get(this, "logstoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
            this.logstoreName = builder.logstoreName;
        }

        @Override
        public final java.lang.Object getProject() {
            return this.project;
        }

        @Override
        public final java.lang.Object getLogstoreName() {
            return this.logstoreName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("project", om.valueToTree(this.getProject()));
            if (this.getLogstoreName() != null) {
                data.set("logstoreName", om.valueToTree(this.getLogstoreName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.datasource.LogstoresProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LogstoresProps.Jsii$Proxy that = (LogstoresProps.Jsii$Proxy) o;

            if (!project.equals(that.project)) return false;
            return this.logstoreName != null ? this.logstoreName.equals(that.logstoreName) : that.logstoreName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.project.hashCode();
            result = 31 * result + (this.logstoreName != null ? this.logstoreName.hashCode() : 0);
            return result;
        }
    }
}
