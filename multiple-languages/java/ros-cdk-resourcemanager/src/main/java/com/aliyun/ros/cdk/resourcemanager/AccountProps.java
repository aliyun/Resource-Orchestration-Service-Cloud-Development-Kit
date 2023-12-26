package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>Account</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.768Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.AccountProps")
@software.amazon.jsii.Jsii.Proxy(AccountProps.Jsii$Proxy.class)
public interface AccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property displayName: Member name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     * Property folderId: The ID of the parent folder.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFolderId() {
        return null;
    }

    /**
     * Property payerAccountId:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayerAccountId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccountProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccountProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccountProps> {
        java.lang.Object displayName;
        java.lang.Object folderId;
        java.lang.Object payerAccountId;

        /**
         * Sets the value of {@link AccountProps#getDisplayName}
         * @param displayName Property displayName: Member name. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getDisplayName}
         * @param displayName Property displayName: Member name. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getFolderId}
         * @param folderId Property folderId: The ID of the parent folder.
         * @return {@code this}
         */
        public Builder folderId(java.lang.String folderId) {
            this.folderId = folderId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getFolderId}
         * @param folderId Property folderId: The ID of the parent folder.
         * @return {@code this}
         */
        public Builder folderId(com.aliyun.ros.cdk.core.IResolvable folderId) {
            this.folderId = folderId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getPayerAccountId}
         * @param payerAccountId Property payerAccountId:.
         * @return {@code this}
         */
        public Builder payerAccountId(java.lang.String payerAccountId) {
            this.payerAccountId = payerAccountId;
            return this;
        }

        /**
         * Sets the value of {@link AccountProps#getPayerAccountId}
         * @param payerAccountId Property payerAccountId:.
         * @return {@code this}
         */
        public Builder payerAccountId(com.aliyun.ros.cdk.core.IResolvable payerAccountId) {
            this.payerAccountId = payerAccountId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccountProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccountProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccountProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccountProps {
        private final java.lang.Object displayName;
        private final java.lang.Object folderId;
        private final java.lang.Object payerAccountId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.folderId = software.amazon.jsii.Kernel.get(this, "folderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payerAccountId = software.amazon.jsii.Kernel.get(this, "payerAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
            this.folderId = builder.folderId;
            this.payerAccountId = builder.payerAccountId;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getFolderId() {
            return this.folderId;
        }

        @Override
        public final java.lang.Object getPayerAccountId() {
            return this.payerAccountId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("displayName", om.valueToTree(this.getDisplayName()));
            if (this.getFolderId() != null) {
                data.set("folderId", om.valueToTree(this.getFolderId()));
            }
            if (this.getPayerAccountId() != null) {
                data.set("payerAccountId", om.valueToTree(this.getPayerAccountId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.AccountProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccountProps.Jsii$Proxy that = (AccountProps.Jsii$Proxy) o;

            if (!displayName.equals(that.displayName)) return false;
            if (this.folderId != null ? !this.folderId.equals(that.folderId) : that.folderId != null) return false;
            return this.payerAccountId != null ? this.payerAccountId.equals(that.payerAccountId) : that.payerAccountId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.displayName.hashCode();
            result = 31 * result + (this.folderId != null ? this.folderId.hashCode() : 0);
            result = 31 * result + (this.payerAccountId != null ? this.payerAccountId.hashCode() : 0);
            return result;
        }
    }
}
