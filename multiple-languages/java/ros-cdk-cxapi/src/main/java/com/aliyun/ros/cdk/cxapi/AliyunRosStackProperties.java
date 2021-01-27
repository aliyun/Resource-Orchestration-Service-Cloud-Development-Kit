package com.aliyun.ros.cdk.cxapi;

/**
 * Artifact properties for ROS stacks.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:30.707Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.AliyunRosStackProperties")
@software.amazon.jsii.Jsii.Proxy(AliyunRosStackProperties.Jsii$Proxy.class)
public interface AliyunRosStackProperties extends software.amazon.jsii.JsiiSerializable {

    /**
     * A file relative to the assembly root which contains the ROS template for this stack.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTemplateFile();

    /**
     * Values for ROS stack parameters that should be passed when the stack is deployed.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getParameters() {
        return null;
    }

    /**
     * The name to use for the ROS stack.
     * <p>
     * Default: - name derived from artifact ID
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getStackName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AliyunRosStackProperties}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AliyunRosStackProperties}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AliyunRosStackProperties> {
        private java.lang.String templateFile;
        private java.util.Map<java.lang.String, java.lang.String> parameters;
        private java.lang.String stackName;

        /**
         * Sets the value of {@link AliyunRosStackProperties#getTemplateFile}
         * @param templateFile A file relative to the assembly root which contains the ROS template for this stack. This parameter is required.
         * @return {@code this}
         */
        public Builder templateFile(java.lang.String templateFile) {
            this.templateFile = templateFile;
            return this;
        }

        /**
         * Sets the value of {@link AliyunRosStackProperties#getParameters}
         * @param parameters Values for ROS stack parameters that should be passed when the stack is deployed.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, java.lang.String> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link AliyunRosStackProperties#getStackName}
         * @param stackName The name to use for the ROS stack.
         * @return {@code this}
         */
        public Builder stackName(java.lang.String stackName) {
            this.stackName = stackName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AliyunRosStackProperties}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AliyunRosStackProperties build() {
            return new Jsii$Proxy(templateFile, parameters, stackName);
        }
    }

    /**
     * An implementation for {@link AliyunRosStackProperties}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AliyunRosStackProperties {
        private final java.lang.String templateFile;
        private final java.util.Map<java.lang.String, java.lang.String> parameters;
        private final java.lang.String stackName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.templateFile = software.amazon.jsii.Kernel.get(this, "templateFile", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.stackName = software.amazon.jsii.Kernel.get(this, "stackName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String templateFile, final java.util.Map<java.lang.String, java.lang.String> parameters, final java.lang.String stackName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.templateFile = java.util.Objects.requireNonNull(templateFile, "templateFile is required");
            this.parameters = parameters;
            this.stackName = stackName;
        }

        @Override
        public final java.lang.String getTemplateFile() {
            return this.templateFile;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.String getStackName() {
            return this.stackName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("templateFile", om.valueToTree(this.getTemplateFile()));
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getStackName() != null) {
                data.set("stackName", om.valueToTree(this.getStackName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cxapi.AliyunRosStackProperties"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AliyunRosStackProperties.Jsii$Proxy that = (AliyunRosStackProperties.Jsii$Proxy) o;

            if (!templateFile.equals(that.templateFile)) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            return this.stackName != null ? this.stackName.equals(that.stackName) : that.stackName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.templateFile.hashCode();
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.stackName != null ? this.stackName.hashCode() : 0);
            return result;
        }
    }
}
