package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>User</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.652Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.UserProps")
@software.amazon.jsii.Jsii.Proxy(UserProps.Jsii$Proxy.class)
public interface UserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property userName: Specifies the user name, containing up to 64 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

    /**
     * Property comments: Comments of ram user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComments() {
        return null;
    }

    /**
     * Property deletionForce: Whether force detach the policies and groups attached to the user.
     * <p>
     * Default value is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisplayName() {
        return null;
    }

    /**
     * Property email: Email of ram user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEmail() {
        return null;
    }

    /**
     * Property groups: A name of a group to which you want to add the user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroups() {
        return null;
    }

    /**
     * Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginProfile() {
        return null;
    }

    /**
     * Property mobilePhone: Phone number of ram user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMobilePhone() {
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
     * @return a {@link Builder} of {@link UserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserProps> {
        java.lang.Object userName;
        java.lang.Object comments;
        java.lang.Object deletionForce;
        java.lang.Object displayName;
        java.lang.Object email;
        java.lang.Object groups;
        java.lang.Object loginProfile;
        java.lang.Object mobilePhone;
        java.lang.Object policies;
        java.lang.Object policyAttachments;

        /**
         * Sets the value of {@link UserProps#getUserName}
         * @param userName Property userName: Specifies the user name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getUserName}
         * @param userName Property userName: Specifies the user name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getComments}
         * @param comments Property comments: Comments of ram user.
         * @return {@code this}
         */
        public Builder comments(java.lang.String comments) {
            this.comments = comments;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getComments}
         * @param comments Property comments: Comments of ram user.
         * @return {@code this}
         */
        public Builder comments(com.aliyun.ros.cdk.core.IResolvable comments) {
            this.comments = comments;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force detach the policies and groups attached to the user.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force detach the policies and groups attached to the user.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getDisplayName}
         * @param displayName Property displayName: Display name, up to 128 characters or Chinese characters.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getDisplayName}
         * @param displayName Property displayName: Display name, up to 128 characters or Chinese characters.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getEmail}
         * @param email Property email: Email of ram user.
         * @return {@code this}
         */
        public Builder email(java.lang.String email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getEmail}
         * @param email Property email: Email of ram user.
         * @return {@code this}
         */
        public Builder email(com.aliyun.ros.cdk.core.IResolvable email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getGroups}
         * @param groups Property groups: A name of a group to which you want to add the user.
         * @return {@code this}
         */
        public Builder groups(java.util.List<? extends java.lang.Object> groups) {
            this.groups = groups;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getGroups}
         * @param groups Property groups: A name of a group to which you want to add the user.
         * @return {@code this}
         */
        public Builder groups(com.aliyun.ros.cdk.core.IResolvable groups) {
            this.groups = groups;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getLoginProfile}
         * @param loginProfile Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
         * @return {@code this}
         */
        public Builder loginProfile(com.aliyun.ros.cdk.core.IResolvable loginProfile) {
            this.loginProfile = loginProfile;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getLoginProfile}
         * @param loginProfile Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
         * @return {@code this}
         */
        public Builder loginProfile(com.aliyun.ros.cdk.ram.RosUser.LoginProfileProperty loginProfile) {
            this.loginProfile = loginProfile;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getMobilePhone}
         * @param mobilePhone Property mobilePhone: Phone number of ram user.
         * @return {@code this}
         */
        public Builder mobilePhone(java.lang.String mobilePhone) {
            this.mobilePhone = mobilePhone;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getMobilePhone}
         * @param mobilePhone Property mobilePhone: Phone number of ram user.
         * @return {@code this}
         */
        public Builder mobilePhone(com.aliyun.ros.cdk.core.IResolvable mobilePhone) {
            this.mobilePhone = mobilePhone;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getPolicies}
         * @param policies Property policies: Describes what actions are allowed on what resources.
         * @return {@code this}
         */
        public Builder policies(com.aliyun.ros.cdk.core.IResolvable policies) {
            this.policies = policies;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getPolicies}
         * @param policies Property policies: Describes what actions are allowed on what resources.
         * @return {@code this}
         */
        public Builder policies(java.util.List<? extends java.lang.Object> policies) {
            this.policies = policies;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getPolicyAttachments}
         * @param policyAttachments Property policyAttachments: System and custom policy names to attach.
         * @return {@code this}
         */
        public Builder policyAttachments(com.aliyun.ros.cdk.core.IResolvable policyAttachments) {
            this.policyAttachments = policyAttachments;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getPolicyAttachments}
         * @param policyAttachments Property policyAttachments: System and custom policy names to attach.
         * @return {@code this}
         */
        public Builder policyAttachments(com.aliyun.ros.cdk.ram.RosUser.PolicyAttachmentsProperty policyAttachments) {
            this.policyAttachments = policyAttachments;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserProps {
        private final java.lang.Object userName;
        private final java.lang.Object comments;
        private final java.lang.Object deletionForce;
        private final java.lang.Object displayName;
        private final java.lang.Object email;
        private final java.lang.Object groups;
        private final java.lang.Object loginProfile;
        private final java.lang.Object mobilePhone;
        private final java.lang.Object policies;
        private final java.lang.Object policyAttachments;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comments = software.amazon.jsii.Kernel.get(this, "comments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.email = software.amazon.jsii.Kernel.get(this, "email", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groups = software.amazon.jsii.Kernel.get(this, "groups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginProfile = software.amazon.jsii.Kernel.get(this, "loginProfile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mobilePhone = software.amazon.jsii.Kernel.get(this, "mobilePhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policies = software.amazon.jsii.Kernel.get(this, "policies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyAttachments = software.amazon.jsii.Kernel.get(this, "policyAttachments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.userName = java.util.Objects.requireNonNull(builder.userName, "userName is required");
            this.comments = builder.comments;
            this.deletionForce = builder.deletionForce;
            this.displayName = builder.displayName;
            this.email = builder.email;
            this.groups = builder.groups;
            this.loginProfile = builder.loginProfile;
            this.mobilePhone = builder.mobilePhone;
            this.policies = builder.policies;
            this.policyAttachments = builder.policyAttachments;
        }

        @Override
        public final java.lang.Object getUserName() {
            return this.userName;
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
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getEmail() {
            return this.email;
        }

        @Override
        public final java.lang.Object getGroups() {
            return this.groups;
        }

        @Override
        public final java.lang.Object getLoginProfile() {
            return this.loginProfile;
        }

        @Override
        public final java.lang.Object getMobilePhone() {
            return this.mobilePhone;
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

            data.set("userName", om.valueToTree(this.getUserName()));
            if (this.getComments() != null) {
                data.set("comments", om.valueToTree(this.getComments()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDisplayName() != null) {
                data.set("displayName", om.valueToTree(this.getDisplayName()));
            }
            if (this.getEmail() != null) {
                data.set("email", om.valueToTree(this.getEmail()));
            }
            if (this.getGroups() != null) {
                data.set("groups", om.valueToTree(this.getGroups()));
            }
            if (this.getLoginProfile() != null) {
                data.set("loginProfile", om.valueToTree(this.getLoginProfile()));
            }
            if (this.getMobilePhone() != null) {
                data.set("mobilePhone", om.valueToTree(this.getMobilePhone()));
            }
            if (this.getPolicies() != null) {
                data.set("policies", om.valueToTree(this.getPolicies()));
            }
            if (this.getPolicyAttachments() != null) {
                data.set("policyAttachments", om.valueToTree(this.getPolicyAttachments()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.UserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserProps.Jsii$Proxy that = (UserProps.Jsii$Proxy) o;

            if (!userName.equals(that.userName)) return false;
            if (this.comments != null ? !this.comments.equals(that.comments) : that.comments != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.displayName != null ? !this.displayName.equals(that.displayName) : that.displayName != null) return false;
            if (this.email != null ? !this.email.equals(that.email) : that.email != null) return false;
            if (this.groups != null ? !this.groups.equals(that.groups) : that.groups != null) return false;
            if (this.loginProfile != null ? !this.loginProfile.equals(that.loginProfile) : that.loginProfile != null) return false;
            if (this.mobilePhone != null ? !this.mobilePhone.equals(that.mobilePhone) : that.mobilePhone != null) return false;
            if (this.policies != null ? !this.policies.equals(that.policies) : that.policies != null) return false;
            return this.policyAttachments != null ? this.policyAttachments.equals(that.policyAttachments) : that.policyAttachments == null;
        }

        @Override
        public final int hashCode() {
            int result = this.userName.hashCode();
            result = 31 * result + (this.comments != null ? this.comments.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.displayName != null ? this.displayName.hashCode() : 0);
            result = 31 * result + (this.email != null ? this.email.hashCode() : 0);
            result = 31 * result + (this.groups != null ? this.groups.hashCode() : 0);
            result = 31 * result + (this.loginProfile != null ? this.loginProfile.hashCode() : 0);
            result = 31 * result + (this.mobilePhone != null ? this.mobilePhone.hashCode() : 0);
            result = 31 * result + (this.policies != null ? this.policies.hashCode() : 0);
            result = 31 * result + (this.policyAttachments != null ? this.policyAttachments.hashCode() : 0);
            return result;
        }
    }
}
