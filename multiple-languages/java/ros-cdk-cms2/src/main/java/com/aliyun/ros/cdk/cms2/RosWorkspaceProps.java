package com.aliyun.ros.cdk.cms2;

/**
 * Properties for defining a <code>RosWorkspace</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-workspace
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:47:48.995Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosWorkspaceProps")
@software.amazon.jsii.Jsii.Proxy(RosWorkspaceProps.Jsii$Proxy.class)
public interface RosWorkspaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsProject();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisplayName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosWorkspaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosWorkspaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosWorkspaceProps> {
        java.lang.Object slsProject;
        java.lang.Object workspaceName;
        java.lang.Object description;
        java.lang.Object displayName;

        /**
         * Sets the value of {@link RosWorkspaceProps#getSlsProject}
         * @param slsProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProject(java.lang.String slsProject) {
            this.slsProject = slsProject;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getSlsProject}
         * @param slsProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProject(com.aliyun.ros.cdk.core.IResolvable slsProject) {
            this.slsProject = slsProject;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getWorkspaceName}
         * @param workspaceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceName(java.lang.String workspaceName) {
            this.workspaceName = workspaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getWorkspaceName}
         * @param workspaceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceName(com.aliyun.ros.cdk.core.IResolvable workspaceName) {
            this.workspaceName = workspaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getDisplayName}
         * @param displayName the value to be set.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getDisplayName}
         * @param displayName the value to be set.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosWorkspaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosWorkspaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosWorkspaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosWorkspaceProps {
        private final java.lang.Object slsProject;
        private final java.lang.Object workspaceName;
        private final java.lang.Object description;
        private final java.lang.Object displayName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.slsProject = software.amazon.jsii.Kernel.get(this, "slsProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceName = software.amazon.jsii.Kernel.get(this, "workspaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.slsProject = java.util.Objects.requireNonNull(builder.slsProject, "slsProject is required");
            this.workspaceName = java.util.Objects.requireNonNull(builder.workspaceName, "workspaceName is required");
            this.description = builder.description;
            this.displayName = builder.displayName;
        }

        @Override
        public final java.lang.Object getSlsProject() {
            return this.slsProject;
        }

        @Override
        public final java.lang.Object getWorkspaceName() {
            return this.workspaceName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("slsProject", om.valueToTree(this.getSlsProject()));
            data.set("workspaceName", om.valueToTree(this.getWorkspaceName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDisplayName() != null) {
                data.set("displayName", om.valueToTree(this.getDisplayName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosWorkspaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosWorkspaceProps.Jsii$Proxy that = (RosWorkspaceProps.Jsii$Proxy) o;

            if (!slsProject.equals(that.slsProject)) return false;
            if (!workspaceName.equals(that.workspaceName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.displayName != null ? this.displayName.equals(that.displayName) : that.displayName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.slsProject.hashCode();
            result = 31 * result + (this.workspaceName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.displayName != null ? this.displayName.hashCode() : 0);
            return result;
        }
    }
}
