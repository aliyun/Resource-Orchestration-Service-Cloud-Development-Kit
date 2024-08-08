package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>RosDatabase</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-database
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:13.516Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDatabaseProps")
@software.amazon.jsii.Jsii.Proxy(RosDatabaseProps.Jsii$Proxy.class)
public interface RosDatabaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCharacterSetName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbDescription() {
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
        java.lang.Object characterSetName;
        java.lang.Object dbInstanceId;
        java.lang.Object dbName;
        java.lang.Object dbDescription;

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
         * Sets the value of {@link RosDatabaseProps#getDbName}
         * @param dbName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDbName}
         * @param dbName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDbDescription}
         * @param dbDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbDescription(java.lang.String dbDescription) {
            this.dbDescription = dbDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDbDescription}
         * @param dbDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbDescription(com.aliyun.ros.cdk.core.IResolvable dbDescription) {
            this.dbDescription = dbDescription;
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
        private final java.lang.Object characterSetName;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbName;
        private final java.lang.Object dbDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbDescription = software.amazon.jsii.Kernel.get(this, "dbDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.characterSetName = java.util.Objects.requireNonNull(builder.characterSetName, "characterSetName is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
            this.dbDescription = builder.dbDescription;
        }

        @Override
        public final java.lang.Object getCharacterSetName() {
            return this.characterSetName;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.Object getDbDescription() {
            return this.dbDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("characterSetName", om.valueToTree(this.getCharacterSetName()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbName", om.valueToTree(this.getDbName()));
            if (this.getDbDescription() != null) {
                data.set("dbDescription", om.valueToTree(this.getDbDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosDatabaseProps"));
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

            if (!characterSetName.equals(that.characterSetName)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!dbName.equals(that.dbName)) return false;
            return this.dbDescription != null ? this.dbDescription.equals(that.dbDescription) : that.dbDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.characterSetName.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            result = 31 * result + (this.dbDescription != null ? this.dbDescription.hashCode() : 0);
            return result;
        }
    }
}
