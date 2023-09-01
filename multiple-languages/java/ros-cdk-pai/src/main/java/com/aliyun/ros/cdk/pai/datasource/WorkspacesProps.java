package com.aliyun.ros.cdk.pai.datasource;

/**
 * Properties for defining a <code>DATASOURCE::PAI::Workspaces</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.704Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.datasource.WorkspacesProps")
@software.amazon.jsii.Jsii.Proxy(WorkspacesProps.Jsii$Proxy.class)
public interface WorkspacesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property workspaceId: The ID of the workspace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkspaceId() {
        return null;
    }

    /**
     * Property workspaceName: The workspace name.
     * <p>
     * The format is as follows:
     * <p>
     * <ul>
     * <li>3 to 23 characters in length and can contain letters, underscores, or numbers.</li>
     * <li>Must start with a large or small letter.</li>
     * <li>Unique in the current region.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkspaceName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WorkspacesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WorkspacesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WorkspacesProps> {
        java.lang.Object workspaceId;
        java.lang.Object workspaceName;

        /**
         * Sets the value of {@link WorkspacesProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link WorkspacesProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link WorkspacesProps#getWorkspaceName}
         * @param workspaceName Property workspaceName: The workspace name.
         *                      The format is as follows:
         *                      <p>
         *                      <ul>
         *                      <li>3 to 23 characters in length and can contain letters, underscores, or numbers.</li>
         *                      <li>Must start with a large or small letter.</li>
         *                      <li>Unique in the current region.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder workspaceName(java.lang.String workspaceName) {
            this.workspaceName = workspaceName;
            return this;
        }

        /**
         * Sets the value of {@link WorkspacesProps#getWorkspaceName}
         * @param workspaceName Property workspaceName: The workspace name.
         *                      The format is as follows:
         *                      <p>
         *                      <ul>
         *                      <li>3 to 23 characters in length and can contain letters, underscores, or numbers.</li>
         *                      <li>Must start with a large or small letter.</li>
         *                      <li>Unique in the current region.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder workspaceName(com.aliyun.ros.cdk.core.IResolvable workspaceName) {
            this.workspaceName = workspaceName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WorkspacesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WorkspacesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WorkspacesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WorkspacesProps {
        private final java.lang.Object workspaceId;
        private final java.lang.Object workspaceName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceName = software.amazon.jsii.Kernel.get(this, "workspaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.workspaceId = builder.workspaceId;
            this.workspaceName = builder.workspaceName;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getWorkspaceName() {
            return this.workspaceName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getWorkspaceId() != null) {
                data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            }
            if (this.getWorkspaceName() != null) {
                data.set("workspaceName", om.valueToTree(this.getWorkspaceName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.datasource.WorkspacesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WorkspacesProps.Jsii$Proxy that = (WorkspacesProps.Jsii$Proxy) o;

            if (this.workspaceId != null ? !this.workspaceId.equals(that.workspaceId) : that.workspaceId != null) return false;
            return this.workspaceName != null ? this.workspaceName.equals(that.workspaceName) : that.workspaceName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.workspaceId != null ? this.workspaceId.hashCode() : 0;
            result = 31 * result + (this.workspaceName != null ? this.workspaceName.hashCode() : 0);
            return result;
        }
    }
}
