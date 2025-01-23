package com.aliyun.ros.cdk.polardbx;

/**
 * Properties for defining a <code>RosDatabase</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.641Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardbx.$Module.class, fqn = "@alicloud/ros-cdk-polardbx.RosDatabaseProps")
@software.amazon.jsii.Jsii.Proxy(RosDatabaseProps.Jsii$Proxy.class)
public interface RosDatabaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccounts();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCharacterSetName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatabaseName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDatabaseProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDatabaseProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDatabaseProps> {
        java.lang.Object accounts;
        java.lang.Object characterSetName;
        java.lang.Object databaseName;
        java.lang.Object dbInstanceId;
        java.lang.Object databaseDescription;
        java.lang.Object mode;

        /**
         * Sets the value of {@link RosDatabaseProps#getAccounts}
         * @param accounts the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accounts(com.aliyun.ros.cdk.core.IResolvable accounts) {
            this.accounts = accounts;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getAccounts}
         * @param accounts the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accounts(java.util.List<? extends java.lang.Object> accounts) {
            this.accounts = accounts;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getCharacterSetName}
         * @param characterSetName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder characterSetName(java.lang.String characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getCharacterSetName}
         * @param characterSetName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder characterSetName(com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDatabaseName}
         * @param databaseName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseName(java.lang.String databaseName) {
            this.databaseName = databaseName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDatabaseName}
         * @param databaseName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseName(com.aliyun.ros.cdk.core.IResolvable databaseName) {
            this.databaseName = databaseName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDatabaseDescription}
         * @param databaseDescription the value to be set.
         * @return {@code this}
         */
        public Builder databaseDescription(java.lang.String databaseDescription) {
            this.databaseDescription = databaseDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDatabaseDescription}
         * @param databaseDescription the value to be set.
         * @return {@code this}
         */
        public Builder databaseDescription(com.aliyun.ros.cdk.core.IResolvable databaseDescription) {
            this.databaseDescription = databaseDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDatabaseProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDatabaseProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDatabaseProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDatabaseProps {
        private final java.lang.Object accounts;
        private final java.lang.Object characterSetName;
        private final java.lang.Object databaseName;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object databaseDescription;
        private final java.lang.Object mode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accounts = software.amazon.jsii.Kernel.get(this, "accounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databaseName = software.amazon.jsii.Kernel.get(this, "databaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databaseDescription = software.amazon.jsii.Kernel.get(this, "databaseDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accounts = java.util.Objects.requireNonNull(builder.accounts, "accounts is required");
            this.characterSetName = java.util.Objects.requireNonNull(builder.characterSetName, "characterSetName is required");
            this.databaseName = java.util.Objects.requireNonNull(builder.databaseName, "databaseName is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.databaseDescription = builder.databaseDescription;
            this.mode = builder.mode;
        }

        @Override
        public final java.lang.Object getAccounts() {
            return this.accounts;
        }

        @Override
        public final java.lang.Object getCharacterSetName() {
            return this.characterSetName;
        }

        @Override
        public final java.lang.Object getDatabaseName() {
            return this.databaseName;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDatabaseDescription() {
            return this.databaseDescription;
        }

        @Override
        public final java.lang.Object getMode() {
            return this.mode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accounts", om.valueToTree(this.getAccounts()));
            data.set("characterSetName", om.valueToTree(this.getCharacterSetName()));
            data.set("databaseName", om.valueToTree(this.getDatabaseName()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            if (this.getDatabaseDescription() != null) {
                data.set("databaseDescription", om.valueToTree(this.getDatabaseDescription()));
            }
            if (this.getMode() != null) {
                data.set("mode", om.valueToTree(this.getMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardbx.RosDatabaseProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDatabaseProps.Jsii$Proxy that = (RosDatabaseProps.Jsii$Proxy) o;

            if (!accounts.equals(that.accounts)) return false;
            if (!characterSetName.equals(that.characterSetName)) return false;
            if (!databaseName.equals(that.databaseName)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (this.databaseDescription != null ? !this.databaseDescription.equals(that.databaseDescription) : that.databaseDescription != null) return false;
            return this.mode != null ? this.mode.equals(that.mode) : that.mode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accounts.hashCode();
            result = 31 * result + (this.characterSetName.hashCode());
            result = 31 * result + (this.databaseName.hashCode());
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.databaseDescription != null ? this.databaseDescription.hashCode() : 0);
            result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
            return result;
        }
    }
}
