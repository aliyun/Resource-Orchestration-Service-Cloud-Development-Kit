package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>RosWorkspace</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.627Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.RosWorkspaceProps")
@software.amazon.jsii.Jsii.Proxy(RosWorkspaceProps.Jsii$Proxy.class)
public interface RosWorkspaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvTypes();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceName();

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
        java.lang.Object description;
        java.lang.Object envTypes;
        java.lang.Object workspaceName;
        java.lang.Object displayName;

        /**
         * Sets the value of {@link RosWorkspaceProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getEnvTypes}
         * @param envTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envTypes(com.aliyun.ros.cdk.core.IResolvable envTypes) {
            this.envTypes = envTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkspaceProps#getEnvTypes}
         * @param envTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envTypes(java.util.List<? extends java.lang.Object> envTypes) {
            this.envTypes = envTypes;
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
        private final java.lang.Object description;
        private final java.lang.Object envTypes;
        private final java.lang.Object workspaceName;
        private final java.lang.Object displayName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envTypes = software.amazon.jsii.Kernel.get(this, "envTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceName = software.amazon.jsii.Kernel.get(this, "workspaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.envTypes = java.util.Objects.requireNonNull(builder.envTypes, "envTypes is required");
            this.workspaceName = java.util.Objects.requireNonNull(builder.workspaceName, "workspaceName is required");
            this.displayName = builder.displayName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnvTypes() {
            return this.envTypes;
        }

        @Override
        public final java.lang.Object getWorkspaceName() {
            return this.workspaceName;
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

            data.set("description", om.valueToTree(this.getDescription()));
            data.set("envTypes", om.valueToTree(this.getEnvTypes()));
            data.set("workspaceName", om.valueToTree(this.getWorkspaceName()));
            if (this.getDisplayName() != null) {
                data.set("displayName", om.valueToTree(this.getDisplayName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.RosWorkspaceProps"));
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

            if (!description.equals(that.description)) return false;
            if (!envTypes.equals(that.envTypes)) return false;
            if (!workspaceName.equals(that.workspaceName)) return false;
            return this.displayName != null ? this.displayName.equals(that.displayName) : that.displayName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description.hashCode();
            result = 31 * result + (this.envTypes.hashCode());
            result = 31 * result + (this.workspaceName.hashCode());
            result = 31 * result + (this.displayName != null ? this.displayName.hashCode() : 0);
            return result;
        }
    }
}
