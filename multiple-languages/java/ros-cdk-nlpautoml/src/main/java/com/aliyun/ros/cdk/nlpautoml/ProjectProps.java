package com.aliyun.ros.cdk.nlpautoml;

/**
 * Properties for defining a <code>ALIYUN::NLPAUTOML::Project</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.803Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlpautoml.$Module.class, fqn = "@alicloud/ros-cdk-nlpautoml.ProjectProps")
@software.amazon.jsii.Jsii.Proxy(ProjectProps.Jsii$Proxy.class)
public interface ProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectDescription();

    /**
     * Property projectName: The name of project.
     * <p>
     * Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property projectType: The type of nlp project.
     * <p>
     * The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectType();

    /**
     * @return a {@link Builder} of {@link ProjectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ProjectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ProjectProps> {
        java.lang.Object projectDescription;
        java.lang.Object projectName;
        java.lang.Object projectType;

        /**
         * Sets the value of {@link ProjectProps#getProjectDescription}
         * @param projectDescription Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder projectDescription(java.lang.String projectDescription) {
            this.projectDescription = projectDescription;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectDescription}
         * @param projectDescription Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder projectDescription(com.aliyun.ros.cdk.core.IResolvable projectDescription) {
            this.projectDescription = projectDescription;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectName}
         * @param projectName Property projectName: The name of project. This parameter is required.
         *                    Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectName}
         * @param projectName Property projectName: The name of project. This parameter is required.
         *                    Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectType}
         * @param projectType Property projectType: The type of nlp project. This parameter is required.
         *                    The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
         * @return {@code this}
         */
        public Builder projectType(java.lang.String projectType) {
            this.projectType = projectType;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectType}
         * @param projectType Property projectType: The type of nlp project. This parameter is required.
         *                    The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
         * @return {@code this}
         */
        public Builder projectType(com.aliyun.ros.cdk.core.IResolvable projectType) {
            this.projectType = projectType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ProjectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ProjectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ProjectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProjectProps {
        private final java.lang.Object projectDescription;
        private final java.lang.Object projectName;
        private final java.lang.Object projectType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.projectDescription = software.amazon.jsii.Kernel.get(this, "projectDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectType = software.amazon.jsii.Kernel.get(this, "projectType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.projectDescription = java.util.Objects.requireNonNull(builder.projectDescription, "projectDescription is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.projectType = java.util.Objects.requireNonNull(builder.projectType, "projectType is required");
        }

        @Override
        public final java.lang.Object getProjectDescription() {
            return this.projectDescription;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getProjectType() {
            return this.projectType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("projectDescription", om.valueToTree(this.getProjectDescription()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            data.set("projectType", om.valueToTree(this.getProjectType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlpautoml.ProjectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ProjectProps.Jsii$Proxy that = (ProjectProps.Jsii$Proxy) o;

            if (!projectDescription.equals(that.projectDescription)) return false;
            if (!projectName.equals(that.projectName)) return false;
            return this.projectType.equals(that.projectType);
        }

        @Override
        public final int hashCode() {
            int result = this.projectDescription.hashCode();
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.projectType.hashCode());
            return result;
        }
    }
}
