package com.aliyun.ros.cdk.nls;

/**
 * Properties for defining a <code>Project</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:31.894Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nls.$Module.class, fqn = "@alicloud/ros-cdk-nls.ProjectProps")
@software.amazon.jsii.Jsii.Proxy(ProjectProps.Jsii$Proxy.class)
public interface ProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: Name of the project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property description: Description of the project.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property projectType: Type of the project.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProjectType() {
        return null;
    }

    /**
     * Property sdkType: Type of the SDK.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSdkType() {
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
        java.lang.Object name;
        java.lang.Object description;
        java.lang.Object projectType;
        java.lang.Object sdkType;

        /**
         * Sets the value of {@link ProjectProps#getName}
         * @param name Property name: Name of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getName}
         * @param name Property name: Name of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getDescription}
         * @param description Property description: Description of the project.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getDescription}
         * @param description Property description: Description of the project.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectType}
         * @param projectType Property projectType: Type of the project.
         * @return {@code this}
         */
        public Builder projectType(java.lang.String projectType) {
            this.projectType = projectType;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectType}
         * @param projectType Property projectType: Type of the project.
         * @return {@code this}
         */
        public Builder projectType(com.aliyun.ros.cdk.core.IResolvable projectType) {
            this.projectType = projectType;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getSdkType}
         * @param sdkType Property sdkType: Type of the SDK.
         * @return {@code this}
         */
        public Builder sdkType(java.lang.String sdkType) {
            this.sdkType = sdkType;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getSdkType}
         * @param sdkType Property sdkType: Type of the SDK.
         * @return {@code this}
         */
        public Builder sdkType(com.aliyun.ros.cdk.core.IResolvable sdkType) {
            this.sdkType = sdkType;
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
        private final java.lang.Object name;
        private final java.lang.Object description;
        private final java.lang.Object projectType;
        private final java.lang.Object sdkType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectType = software.amazon.jsii.Kernel.get(this, "projectType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sdkType = software.amazon.jsii.Kernel.get(this, "sdkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.description = builder.description;
            this.projectType = builder.projectType;
            this.sdkType = builder.sdkType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getProjectType() {
            return this.projectType;
        }

        @Override
        public final java.lang.Object getSdkType() {
            return this.sdkType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getProjectType() != null) {
                data.set("projectType", om.valueToTree(this.getProjectType()));
            }
            if (this.getSdkType() != null) {
                data.set("sdkType", om.valueToTree(this.getSdkType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nls.ProjectProps"));
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

            if (!name.equals(that.name)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.projectType != null ? !this.projectType.equals(that.projectType) : that.projectType != null) return false;
            return this.sdkType != null ? this.sdkType.equals(that.sdkType) : that.sdkType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.projectType != null ? this.projectType.hashCode() : 0);
            result = 31 * result + (this.sdkType != null ? this.sdkType.hashCode() : 0);
            return result;
        }
    }
}
