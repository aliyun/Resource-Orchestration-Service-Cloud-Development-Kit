package com.aliyun.ros.cdk.dms;

/**
 * Properties for defining a `ALIYUN::DMS::User`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.493Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.RosUserProps")
@software.amazon.jsii.Jsii.Proxy(RosUserProps.Jsii$Proxy.class)
public interface RosUserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getUid();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMobile() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getRoleNames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTid() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getUserName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosUserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUserProps> {
        private java.lang.String uid;
        private java.lang.String mobile;
        private java.util.List<java.lang.String> roleNames;
        private java.lang.String status;
        private java.lang.String tid;
        private java.lang.String userName;

        /**
         * Sets the value of {@link RosUserProps#getUid}
         * @param uid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uid(java.lang.String uid) {
            this.uid = uid;
            return this;
        }

        /**
         * Sets the value of {@link RosUserProps#getMobile}
         * @param mobile the value to be set.
         * @return {@code this}
         */
        public Builder mobile(java.lang.String mobile) {
            this.mobile = mobile;
            return this;
        }

        /**
         * Sets the value of {@link RosUserProps#getRoleNames}
         * @param roleNames the value to be set.
         * @return {@code this}
         */
        public Builder roleNames(java.util.List<java.lang.String> roleNames) {
            this.roleNames = roleNames;
            return this;
        }

        /**
         * Sets the value of {@link RosUserProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosUserProps#getTid}
         * @param tid the value to be set.
         * @return {@code this}
         */
        public Builder tid(java.lang.String tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link RosUserProps#getUserName}
         * @param userName the value to be set.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUserProps build() {
            return new Jsii$Proxy(uid, mobile, roleNames, status, tid, userName);
        }
    }

    /**
     * An implementation for {@link RosUserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUserProps {
        private final java.lang.String uid;
        private final java.lang.String mobile;
        private final java.util.List<java.lang.String> roleNames;
        private final java.lang.String status;
        private final java.lang.String tid;
        private final java.lang.String userName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.uid = software.amazon.jsii.Kernel.get(this, "uid", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.mobile = software.amazon.jsii.Kernel.get(this, "mobile", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.roleNames = software.amazon.jsii.Kernel.get(this, "roleNames", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tid = software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String uid, final java.lang.String mobile, final java.util.List<java.lang.String> roleNames, final java.lang.String status, final java.lang.String tid, final java.lang.String userName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.uid = java.util.Objects.requireNonNull(uid, "uid is required");
            this.mobile = mobile;
            this.roleNames = roleNames;
            this.status = status;
            this.tid = tid;
            this.userName = userName;
        }

        @Override
        public final java.lang.String getUid() {
            return this.uid;
        }

        @Override
        public final java.lang.String getMobile() {
            return this.mobile;
        }

        @Override
        public final java.util.List<java.lang.String> getRoleNames() {
            return this.roleNames;
        }

        @Override
        public final java.lang.String getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.String getTid() {
            return this.tid;
        }

        @Override
        public final java.lang.String getUserName() {
            return this.userName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("uid", om.valueToTree(this.getUid()));
            if (this.getMobile() != null) {
                data.set("mobile", om.valueToTree(this.getMobile()));
            }
            if (this.getRoleNames() != null) {
                data.set("roleNames", om.valueToTree(this.getRoleNames()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getTid() != null) {
                data.set("tid", om.valueToTree(this.getTid()));
            }
            if (this.getUserName() != null) {
                data.set("userName", om.valueToTree(this.getUserName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dms.RosUserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUserProps.Jsii$Proxy that = (RosUserProps.Jsii$Proxy) o;

            if (!uid.equals(that.uid)) return false;
            if (this.mobile != null ? !this.mobile.equals(that.mobile) : that.mobile != null) return false;
            if (this.roleNames != null ? !this.roleNames.equals(that.roleNames) : that.roleNames != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.tid != null ? !this.tid.equals(that.tid) : that.tid != null) return false;
            return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.uid.hashCode();
            result = 31 * result + (this.mobile != null ? this.mobile.hashCode() : 0);
            result = 31 * result + (this.roleNames != null ? this.roleNames.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.tid != null ? this.tid.hashCode() : 0);
            result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
            return result;
        }
    }
}
