package com.aliyun.ros.cdk.datahub;

/**
 * Properties for defining a <code>Project</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-project
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.612Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datahub.$Module.class, fqn = "@alicloud/ros-cdk-datahub.ProjectProps")
@software.amazon.jsii.Jsii.Proxy(ProjectProps.Jsii$Proxy.class)
public interface ProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property comment: The comment of project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getComment();

    /**
     * Property projectName: The name of the project.
     * <p>
     * Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

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
        java.lang.Object comment;
        java.lang.Object projectName;

        /**
         * Sets the value of {@link ProjectProps#getComment}
         * @param comment Property comment: The comment of project. This parameter is required.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getComment}
         * @param comment Property comment: The comment of project. This parameter is required.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectName}
         * @param projectName Property projectName: The name of the project. This parameter is required.
         *                    Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectName}
         * @param projectName Property projectName: The name of the project. This parameter is required.
         *                    Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
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
        private final java.lang.Object comment;
        private final java.lang.Object projectName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.comment = java.util.Objects.requireNonNull(builder.comment, "comment is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
        }

        @Override
        public final java.lang.Object getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("comment", om.valueToTree(this.getComment()));
            data.set("projectName", om.valueToTree(this.getProjectName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-datahub.ProjectProps"));
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

            if (!comment.equals(that.comment)) return false;
            return this.projectName.equals(that.projectName);
        }

        @Override
        public final int hashCode() {
            int result = this.comment.hashCode();
            result = 31 * result + (this.projectName.hashCode());
            return result;
        }
    }
}
