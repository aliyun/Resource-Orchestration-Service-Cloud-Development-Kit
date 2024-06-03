package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>User</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:50.240Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.UserProps")
@software.amazon.jsii.Jsii.Proxy(UserProps.Jsii$Proxy.class)
public interface UserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property directoryId: The ID of the directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     * Property userName: The name of the user.
     * <p>
     * The name must be unique within the directory. The name cannot be changed.
     * The name can contain numbers, letters, and the following special characters: &#64;_-.
     * The name can be up to 64 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

    /**
     * Property description: The description of the user.
     * <p>
     * The description can be up to 1,024 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property displayName: The display name of the user.
     * <p>
     * The name can be up to 256 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisplayName() {
        return null;
    }

    /**
     * Property email: The email address of the user.
     * <p>
     * The email address must be unique within the directory.
     * The email address can be up to 128 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEmail() {
        return null;
    }

    /**
     * Property firstName: The first name of the user.
     * <p>
     * The name can be up to 64 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirstName() {
        return null;
    }

    /**
     * Property lastName: The last name of the user.
     * <p>
     * The name can be up to 64 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLastName() {
        return null;
    }

    /**
     * Property status: The status of the user.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Enabled: The logon of the user is enabled. This is the default value.</li>
     * <li>Disabled: The logon of the user is disabled.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
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
        java.lang.Object directoryId;
        java.lang.Object userName;
        java.lang.Object description;
        java.lang.Object displayName;
        java.lang.Object email;
        java.lang.Object firstName;
        java.lang.Object lastName;
        java.lang.Object status;

        /**
         * Sets the value of {@link UserProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getUserName}
         * @param userName Property userName: The name of the user. This parameter is required.
         *                 The name must be unique within the directory. The name cannot be changed.
         *                 The name can contain numbers, letters, and the following special characters: &#64;_-.
         *                 The name can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getUserName}
         * @param userName Property userName: The name of the user. This parameter is required.
         *                 The name must be unique within the directory. The name cannot be changed.
         *                 The name can contain numbers, letters, and the following special characters: &#64;_-.
         *                 The name can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getDescription}
         * @param description Property description: The description of the user.
         *                    The description can be up to 1,024 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getDescription}
         * @param description Property description: The description of the user.
         *                    The description can be up to 1,024 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getDisplayName}
         * @param displayName Property displayName: The display name of the user.
         *                    The name can be up to 256 characters in length.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getDisplayName}
         * @param displayName Property displayName: The display name of the user.
         *                    The name can be up to 256 characters in length.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getEmail}
         * @param email Property email: The email address of the user.
         *              The email address must be unique within the directory.
         *              The email address can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder email(java.lang.String email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getEmail}
         * @param email Property email: The email address of the user.
         *              The email address must be unique within the directory.
         *              The email address can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder email(com.aliyun.ros.cdk.core.IResolvable email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getFirstName}
         * @param firstName Property firstName: The first name of the user.
         *                  The name can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder firstName(java.lang.String firstName) {
            this.firstName = firstName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getFirstName}
         * @param firstName Property firstName: The first name of the user.
         *                  The name can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder firstName(com.aliyun.ros.cdk.core.IResolvable firstName) {
            this.firstName = firstName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getLastName}
         * @param lastName Property lastName: The last name of the user.
         *                 The name can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder lastName(java.lang.String lastName) {
            this.lastName = lastName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getLastName}
         * @param lastName Property lastName: The last name of the user.
         *                 The name can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder lastName(com.aliyun.ros.cdk.core.IResolvable lastName) {
            this.lastName = lastName;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getStatus}
         * @param status Property status: The status of the user.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Enabled: The logon of the user is enabled. This is the default value.</li>
         *               <li>Disabled: The logon of the user is disabled.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link UserProps#getStatus}
         * @param status Property status: The status of the user.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Enabled: The logon of the user is enabled. This is the default value.</li>
         *               <li>Disabled: The logon of the user is disabled.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
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
        private final java.lang.Object directoryId;
        private final java.lang.Object userName;
        private final java.lang.Object description;
        private final java.lang.Object displayName;
        private final java.lang.Object email;
        private final java.lang.Object firstName;
        private final java.lang.Object lastName;
        private final java.lang.Object status;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.email = software.amazon.jsii.Kernel.get(this, "email", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firstName = software.amazon.jsii.Kernel.get(this, "firstName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lastName = software.amazon.jsii.Kernel.get(this, "lastName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.userName = java.util.Objects.requireNonNull(builder.userName, "userName is required");
            this.description = builder.description;
            this.displayName = builder.displayName;
            this.email = builder.email;
            this.firstName = builder.firstName;
            this.lastName = builder.lastName;
            this.status = builder.status;
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getUserName() {
            return this.userName;
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
        public final java.lang.Object getEmail() {
            return this.email;
        }

        @Override
        public final java.lang.Object getFirstName() {
            return this.firstName;
        }

        @Override
        public final java.lang.Object getLastName() {
            return this.lastName;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            data.set("userName", om.valueToTree(this.getUserName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDisplayName() != null) {
                data.set("displayName", om.valueToTree(this.getDisplayName()));
            }
            if (this.getEmail() != null) {
                data.set("email", om.valueToTree(this.getEmail()));
            }
            if (this.getFirstName() != null) {
                data.set("firstName", om.valueToTree(this.getFirstName()));
            }
            if (this.getLastName() != null) {
                data.set("lastName", om.valueToTree(this.getLastName()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.UserProps"));
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

            if (!directoryId.equals(that.directoryId)) return false;
            if (!userName.equals(that.userName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.displayName != null ? !this.displayName.equals(that.displayName) : that.displayName != null) return false;
            if (this.email != null ? !this.email.equals(that.email) : that.email != null) return false;
            if (this.firstName != null ? !this.firstName.equals(that.firstName) : that.firstName != null) return false;
            if (this.lastName != null ? !this.lastName.equals(that.lastName) : that.lastName != null) return false;
            return this.status != null ? this.status.equals(that.status) : that.status == null;
        }

        @Override
        public final int hashCode() {
            int result = this.directoryId.hashCode();
            result = 31 * result + (this.userName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.displayName != null ? this.displayName.hashCode() : 0);
            result = 31 * result + (this.email != null ? this.email.hashCode() : 0);
            result = 31 * result + (this.firstName != null ? this.firstName.hashCode() : 0);
            result = 31 * result + (this.lastName != null ? this.lastName.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            return result;
        }
    }
}
