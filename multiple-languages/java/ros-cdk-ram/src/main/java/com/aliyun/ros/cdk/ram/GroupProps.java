package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>ALIYUN::RAM::Group</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.608Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.GroupProps")
@software.amazon.jsii.Jsii.Proxy(GroupProps.Jsii$Proxy.class)
public interface GroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupName: Specifies the group name, containing up to 64 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComments() {
        return null;
    }

    /**
     * Property deletionForce: Whether force detach the policies attached to the group.
     * <p>
     * Default value is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreExisting() {
        return null;
    }

    /**
     * Property policies: Describes what actions are allowed on what resources.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicies() {
        return null;
    }

    /**
     * Property policyAttachments: System and custom policy names to attach.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyAttachments() {
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
        java.lang.Object groupName;
        java.lang.Object comments;
        java.lang.Object deletionForce;
        java.lang.Object ignoreExisting;
        java.lang.Object policies;
        java.lang.Object policyAttachments;

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getComments}
         * @param comments Property comments: Remark information, up to 128 characters or Chinese characters.
         * @return {@code this}
         */
        public Builder comments(java.lang.String comments) {
            this.comments = comments;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getComments}
         * @param comments Property comments: Remark information, up to 128 characters or Chinese characters.
         * @return {@code this}
         */
        public Builder comments(com.aliyun.ros.cdk.core.IResolvable comments) {
            this.comments = comments;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force detach the policies attached to the group.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force detach the policies attached to the group.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getIgnoreExisting}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage.
         * @return {@code this}
         */
        public Builder ignoreExisting(java.lang.Boolean ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getIgnoreExisting}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage.
         * @return {@code this}
         */
        public Builder ignoreExisting(com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPolicies}
         * @param policies Property policies: Describes what actions are allowed on what resources.
         * @return {@code this}
         */
        public Builder policies(com.aliyun.ros.cdk.core.IResolvable policies) {
            this.policies = policies;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPolicies}
         * @param policies Property policies: Describes what actions are allowed on what resources.
         * @return {@code this}
         */
        public Builder policies(java.util.List<? extends java.lang.Object> policies) {
            this.policies = policies;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPolicyAttachments}
         * @param policyAttachments Property policyAttachments: System and custom policy names to attach.
         * @return {@code this}
         */
        public Builder policyAttachments(com.aliyun.ros.cdk.core.IResolvable policyAttachments) {
            this.policyAttachments = policyAttachments;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPolicyAttachments}
         * @param policyAttachments Property policyAttachments: System and custom policy names to attach.
         * @return {@code this}
         */
        public Builder policyAttachments(com.aliyun.ros.cdk.ram.RosGroup.PolicyAttachmentsProperty policyAttachments) {
            this.policyAttachments = policyAttachments;
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
        private final java.lang.Object groupName;
        private final java.lang.Object comments;
        private final java.lang.Object deletionForce;
        private final java.lang.Object ignoreExisting;
        private final java.lang.Object policies;
        private final java.lang.Object policyAttachments;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comments = software.amazon.jsii.Kernel.get(this, "comments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ignoreExisting = software.amazon.jsii.Kernel.get(this, "ignoreExisting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policies = software.amazon.jsii.Kernel.get(this, "policies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyAttachments = software.amazon.jsii.Kernel.get(this, "policyAttachments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.comments = builder.comments;
            this.deletionForce = builder.deletionForce;
            this.ignoreExisting = builder.ignoreExisting;
            this.policies = builder.policies;
            this.policyAttachments = builder.policyAttachments;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getComments() {
            return this.comments;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getIgnoreExisting() {
            return this.ignoreExisting;
        }

        @Override
        public final java.lang.Object getPolicies() {
            return this.policies;
        }

        @Override
        public final java.lang.Object getPolicyAttachments() {
            return this.policyAttachments;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupName", om.valueToTree(this.getGroupName()));
            if (this.getComments() != null) {
                data.set("comments", om.valueToTree(this.getComments()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getIgnoreExisting() != null) {
                data.set("ignoreExisting", om.valueToTree(this.getIgnoreExisting()));
            }
            if (this.getPolicies() != null) {
                data.set("policies", om.valueToTree(this.getPolicies()));
            }
            if (this.getPolicyAttachments() != null) {
                data.set("policyAttachments", om.valueToTree(this.getPolicyAttachments()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.GroupProps"));
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

            if (!groupName.equals(that.groupName)) return false;
            if (this.comments != null ? !this.comments.equals(that.comments) : that.comments != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.ignoreExisting != null ? !this.ignoreExisting.equals(that.ignoreExisting) : that.ignoreExisting != null) return false;
            if (this.policies != null ? !this.policies.equals(that.policies) : that.policies != null) return false;
            return this.policyAttachments != null ? this.policyAttachments.equals(that.policyAttachments) : that.policyAttachments == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupName.hashCode();
            result = 31 * result + (this.comments != null ? this.comments.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.ignoreExisting != null ? this.ignoreExisting.hashCode() : 0);
            result = 31 * result + (this.policies != null ? this.policies.hashCode() : 0);
            result = 31 * result + (this.policyAttachments != null ? this.policyAttachments.hashCode() : 0);
            return result;
        }
    }
}
