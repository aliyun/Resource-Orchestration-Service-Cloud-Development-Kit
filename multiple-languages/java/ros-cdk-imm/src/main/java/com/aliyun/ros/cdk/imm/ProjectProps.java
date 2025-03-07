package com.aliyun.ros.cdk.imm;

/**
 * Properties for defining a <code>Project</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.603Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.imm.$Module.class, fqn = "@alicloud/ros-cdk-imm.ProjectProps")
@software.amazon.jsii.Jsii.Proxy(ProjectProps.Jsii$Proxy.class)
public interface ProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property project: The name of project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProject();

    /**
     * Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).
     * <p>
     * The default value is AliyunIMMDefaultRole.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceRole() {
        return null;
    }

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
        java.lang.Object project;
        java.lang.Object serviceRole;

        /**
         * Sets the value of {@link ProjectProps#getProject}
         * @param project Property project: The name of project. This parameter is required.
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProject}
         * @param project Property project: The name of project. This parameter is required.
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getServiceRole}
         * @param serviceRole Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).
         *                    The default value is AliyunIMMDefaultRole.
         * @return {@code this}
         */
        public Builder serviceRole(java.lang.String serviceRole) {
            this.serviceRole = serviceRole;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getServiceRole}
         * @param serviceRole Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).
         *                    The default value is AliyunIMMDefaultRole.
         * @return {@code this}
         */
        public Builder serviceRole(com.aliyun.ros.cdk.core.IResolvable serviceRole) {
            this.serviceRole = serviceRole;
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
        private final java.lang.Object project;
        private final java.lang.Object serviceRole;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceRole = software.amazon.jsii.Kernel.get(this, "serviceRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
            this.serviceRole = builder.serviceRole;
        }

        @Override
        public final java.lang.Object getProject() {
            return this.project;
        }

        @Override
        public final java.lang.Object getServiceRole() {
            return this.serviceRole;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("project", om.valueToTree(this.getProject()));
            if (this.getServiceRole() != null) {
                data.set("serviceRole", om.valueToTree(this.getServiceRole()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-imm.ProjectProps"));
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

            if (!project.equals(that.project)) return false;
            return this.serviceRole != null ? this.serviceRole.equals(that.serviceRole) : that.serviceRole == null;
        }

        @Override
        public final int hashCode() {
            int result = this.project.hashCode();
            result = 31 * result + (this.serviceRole != null ? this.serviceRole.hashCode() : 0);
            return result;
        }
    }
}
