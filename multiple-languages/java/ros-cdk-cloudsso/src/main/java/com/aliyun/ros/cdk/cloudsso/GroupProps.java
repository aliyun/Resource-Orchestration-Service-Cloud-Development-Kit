package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>Group</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.881Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.GroupProps")
@software.amazon.jsii.Jsii.Proxy(GroupProps.Jsii$Proxy.class)
public interface GroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property directoryId: The ID of the directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     * Property groupName: The name of the group.
     * <p>
     * The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
     * The name can be up to 128 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * Property description: The description of the group.
     * <p>
     * The description can be up to 1,024 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GroupProps> {
        java.lang.Object directoryId;
        java.lang.Object groupName;
        java.lang.Object description;

        /**
         * Sets the value of {@link GroupProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: The name of the group. This parameter is required.
         *                  The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
         *                  The name can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: The name of the group. This parameter is required.
         *                  The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
         *                  The name can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getDescription}
         * @param description Property description: The description of the group.
         *                    The description can be up to 1,024 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getDescription}
         * @param description Property description: The description of the group.
         *                    The description can be up to 1,024 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GroupProps {
        private final java.lang.Object directoryId;
        private final java.lang.Object groupName;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
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

            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            data.set("groupName", om.valueToTree(this.getGroupName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.GroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GroupProps.Jsii$Proxy that = (GroupProps.Jsii$Proxy) o;

            if (!directoryId.equals(that.directoryId)) return false;
            if (!groupName.equals(that.groupName)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.directoryId.hashCode();
            result = 31 * result + (this.groupName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
