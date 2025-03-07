package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>OssExport</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.856Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.OssExportProps")
@software.amazon.jsii.Jsii.Proxy(OssExportProps.Jsii$Proxy.class)
public interface OssExportProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property configuration: The configuration of the export job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfiguration();

    /**
     * Property displayName: The display name of the export job.
     * <p>
     * It must be 4 to 100 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     * Property exportName: The name of the export job.
     * <p>
     * This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExportName();

    /**
     * Property projectName: The project name of SLS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property description: The description of the export job.
     * <p>
     * It could be 0 to 256 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link OssExportProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OssExportProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OssExportProps> {
        java.lang.Object configuration;
        java.lang.Object displayName;
        java.lang.Object exportName;
        java.lang.Object projectName;
        java.lang.Object description;

        /**
         * Sets the value of {@link OssExportProps#getConfiguration}
         * @param configuration Property configuration: The configuration of the export job. This parameter is required.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link OssExportProps#getConfiguration}
         * @param configuration Property configuration: The configuration of the export job. This parameter is required.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.sls.RosOssExport.ConfigurationProperty configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link OssExportProps#getDisplayName}
         * @param displayName Property displayName: The display name of the export job. This parameter is required.
         *                    It must be 4 to 100 characters in length.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link OssExportProps#getDisplayName}
         * @param displayName Property displayName: The display name of the export job. This parameter is required.
         *                    It must be 4 to 100 characters in length.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link OssExportProps#getExportName}
         * @param exportName Property exportName: The name of the export job. This parameter is required.
         *                   This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
         * @return {@code this}
         */
        public Builder exportName(java.lang.String exportName) {
            this.exportName = exportName;
            return this;
        }

        /**
         * Sets the value of {@link OssExportProps#getExportName}
         * @param exportName Property exportName: The name of the export job. This parameter is required.
         *                   This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
         * @return {@code this}
         */
        public Builder exportName(com.aliyun.ros.cdk.core.IResolvable exportName) {
            this.exportName = exportName;
            return this;
        }

        /**
         * Sets the value of {@link OssExportProps#getProjectName}
         * @param projectName Property projectName: The project name of SLS. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link OssExportProps#getProjectName}
         * @param projectName Property projectName: The project name of SLS. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link OssExportProps#getDescription}
         * @param description Property description: The description of the export job.
         *                    It could be 0 to 256 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link OssExportProps#getDescription}
         * @param description Property description: The description of the export job.
         *                    It could be 0 to 256 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link OssExportProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OssExportProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OssExportProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OssExportProps {
        private final java.lang.Object configuration;
        private final java.lang.Object displayName;
        private final java.lang.Object exportName;
        private final java.lang.Object projectName;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configuration = software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exportName = software.amazon.jsii.Kernel.get(this, "exportName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configuration = java.util.Objects.requireNonNull(builder.configuration, "configuration is required");
            this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
            this.exportName = java.util.Objects.requireNonNull(builder.exportName, "exportName is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getConfiguration() {
            return this.configuration;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getExportName() {
            return this.exportName;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("configuration", om.valueToTree(this.getConfiguration()));
            data.set("displayName", om.valueToTree(this.getDisplayName()));
            data.set("exportName", om.valueToTree(this.getExportName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.OssExportProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OssExportProps.Jsii$Proxy that = (OssExportProps.Jsii$Proxy) o;

            if (!configuration.equals(that.configuration)) return false;
            if (!displayName.equals(that.displayName)) return false;
            if (!exportName.equals(that.exportName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configuration.hashCode();
            result = 31 * result + (this.displayName.hashCode());
            result = 31 * result + (this.exportName.hashCode());
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
