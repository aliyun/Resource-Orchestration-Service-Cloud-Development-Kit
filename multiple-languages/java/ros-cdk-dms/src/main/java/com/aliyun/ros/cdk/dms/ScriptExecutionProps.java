package com.aliyun.ros.cdk.dms;

/**
 * Properties for defining a <code>ScriptExecution</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-scriptexecution
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.566Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.ScriptExecutionProps")
@software.amazon.jsii.Jsii.Proxy(ScriptExecutionProps.Jsii$Proxy.class)
public interface ScriptExecutionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbId: The database ID.
     * <p>
     * <blockquote>
     * <p>
     * This parameter corresponds to the DatabaseId parameter in interfaces like SearchDatabase, ListDatabases, GetDatabase, etc. You can call these interfaces to obtain the value.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbId();

    /**
     * Property logic: Whether it is a logical database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogic();

    /**
     * Property script: The specific SQL script to execute.
     * <p>
     * Includes DQL, DDL, and DML. Whether DDL and DML are allowed depends on the security configuration of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScript();

    /**
     * Property tid: The tenant ID.
     * <p>
     * <blockquote>
     * <p>
     * Obtain this from the tenant ID information displayed when hovering over the top-right corner avatar.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTid() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScriptExecutionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScriptExecutionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScriptExecutionProps> {
        java.lang.Object dbId;
        java.lang.Object logic;
        java.lang.Object script;
        java.lang.Object tid;

        /**
         * Sets the value of {@link ScriptExecutionProps#getDbId}
         * @param dbId Property dbId: The database ID. This parameter is required.
         *             <blockquote>
         *             <p>
         *             This parameter corresponds to the DatabaseId parameter in interfaces like SearchDatabase, ListDatabases, GetDatabase, etc. You can call these interfaces to obtain the value.
         *             <p>
         *             </blockquote>
         * @return {@code this}
         */
        public Builder dbId(java.lang.Number dbId) {
            this.dbId = dbId;
            return this;
        }

        /**
         * Sets the value of {@link ScriptExecutionProps#getDbId}
         * @param dbId Property dbId: The database ID. This parameter is required.
         *             <blockquote>
         *             <p>
         *             This parameter corresponds to the DatabaseId parameter in interfaces like SearchDatabase, ListDatabases, GetDatabase, etc. You can call these interfaces to obtain the value.
         *             <p>
         *             </blockquote>
         * @return {@code this}
         */
        public Builder dbId(com.aliyun.ros.cdk.core.IResolvable dbId) {
            this.dbId = dbId;
            return this;
        }

        /**
         * Sets the value of {@link ScriptExecutionProps#getLogic}
         * @param logic Property logic: Whether it is a logical database. This parameter is required.
         * @return {@code this}
         */
        public Builder logic(java.lang.Boolean logic) {
            this.logic = logic;
            return this;
        }

        /**
         * Sets the value of {@link ScriptExecutionProps#getLogic}
         * @param logic Property logic: Whether it is a logical database. This parameter is required.
         * @return {@code this}
         */
        public Builder logic(com.aliyun.ros.cdk.core.IResolvable logic) {
            this.logic = logic;
            return this;
        }

        /**
         * Sets the value of {@link ScriptExecutionProps#getScript}
         * @param script Property script: The specific SQL script to execute. This parameter is required.
         *               Includes DQL, DDL, and DML. Whether DDL and DML are allowed depends on the security configuration of the instance.
         * @return {@code this}
         */
        public Builder script(java.lang.String script) {
            this.script = script;
            return this;
        }

        /**
         * Sets the value of {@link ScriptExecutionProps#getScript}
         * @param script Property script: The specific SQL script to execute. This parameter is required.
         *               Includes DQL, DDL, and DML. Whether DDL and DML are allowed depends on the security configuration of the instance.
         * @return {@code this}
         */
        public Builder script(com.aliyun.ros.cdk.core.IResolvable script) {
            this.script = script;
            return this;
        }

        /**
         * Sets the value of {@link ScriptExecutionProps#getTid}
         * @param tid Property tid: The tenant ID.
         *            <blockquote>
         *            <p>
         *            Obtain this from the tenant ID information displayed when hovering over the top-right corner avatar.
         *            <p>
         *            </blockquote>
         * @return {@code this}
         */
        public Builder tid(java.lang.Number tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link ScriptExecutionProps#getTid}
         * @param tid Property tid: The tenant ID.
         *            <blockquote>
         *            <p>
         *            Obtain this from the tenant ID information displayed when hovering over the top-right corner avatar.
         *            <p>
         *            </blockquote>
         * @return {@code this}
         */
        public Builder tid(com.aliyun.ros.cdk.core.IResolvable tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScriptExecutionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScriptExecutionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScriptExecutionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScriptExecutionProps {
        private final java.lang.Object dbId;
        private final java.lang.Object logic;
        private final java.lang.Object script;
        private final java.lang.Object tid;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbId = software.amazon.jsii.Kernel.get(this, "dbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logic = software.amazon.jsii.Kernel.get(this, "logic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.script = software.amazon.jsii.Kernel.get(this, "script", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tid = software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbId = java.util.Objects.requireNonNull(builder.dbId, "dbId is required");
            this.logic = java.util.Objects.requireNonNull(builder.logic, "logic is required");
            this.script = java.util.Objects.requireNonNull(builder.script, "script is required");
            this.tid = builder.tid;
        }

        @Override
        public final java.lang.Object getDbId() {
            return this.dbId;
        }

        @Override
        public final java.lang.Object getLogic() {
            return this.logic;
        }

        @Override
        public final java.lang.Object getScript() {
            return this.script;
        }

        @Override
        public final java.lang.Object getTid() {
            return this.tid;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbId", om.valueToTree(this.getDbId()));
            data.set("logic", om.valueToTree(this.getLogic()));
            data.set("script", om.valueToTree(this.getScript()));
            if (this.getTid() != null) {
                data.set("tid", om.valueToTree(this.getTid()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dms.ScriptExecutionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScriptExecutionProps.Jsii$Proxy that = (ScriptExecutionProps.Jsii$Proxy) o;

            if (!dbId.equals(that.dbId)) return false;
            if (!logic.equals(that.logic)) return false;
            if (!script.equals(that.script)) return false;
            return this.tid != null ? this.tid.equals(that.tid) : that.tid == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbId.hashCode();
            result = 31 * result + (this.logic.hashCode());
            result = 31 * result + (this.script.hashCode());
            result = 31 * result + (this.tid != null ? this.tid.hashCode() : 0);
            return result;
        }
    }
}
