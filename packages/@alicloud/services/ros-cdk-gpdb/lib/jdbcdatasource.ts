import * as ros from '@alicloud/ros-cdk-core';
import { RosJdbcDataSource } from './gpdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosJdbcDataSource as JdbcDataSourceProperty };

/**
 * Properties for defining a `JdbcDataSource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
 */
export interface JdbcDataSourceProps {

    /**
     * Property dbInstanceId: The instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property jdbcUserName: The name of the database account.
     */
    readonly jdbcUserName: string | ros.IResolvable;

    /**
     * Property dataSourceDescription: Data Source Description.
     */
    readonly dataSourceDescription?: string | ros.IResolvable;

    /**
     * Property dataSourceName: Data Source Name.
     */
    readonly dataSourceName?: string | ros.IResolvable;

    /**
     * Property dataSourceType: Data Source Type.
     */
    readonly dataSourceType?: string | ros.IResolvable;

    /**
     * Property jdbcConnectionString: The JDBC connection string.
     */
    readonly jdbcConnectionString?: string | ros.IResolvable;

    /**
     * Property jdbcPassword: The password of the database account.
     */
    readonly jdbcPassword?: string | ros.IResolvable;
}

/**
 * Represents a `JdbcDataSource`.
 */
export interface IJdbcDataSource extends ros.IResource {
    readonly props: JdbcDataSourceProps;

    /**
     * Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned. Otherwise, "" is returned "".
     */
    readonly attrConnectionMessage: ros.IResolvable | string;

    /**
     * Attribute ConnectionStatus: Service Status:.
     */
    readonly attrConnectionStatus: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DataSourceDescription: Data Source Description.
     */
    readonly attrDataSourceDescription: ros.IResolvable | string;

    /**
     * Attribute DataSourceId: The data source ID.
     */
    readonly attrDataSourceId: ros.IResolvable | string;

    /**
     * Attribute DataSourceName: Data Source Name.
     */
    readonly attrDataSourceName: ros.IResolvable | string;

    /**
     * Attribute DataSourceType: Data Source Type.
     */
    readonly attrDataSourceType: ros.IResolvable | string;

    /**
     * Attribute ExternalDataServiceId: External Data Service id.
     */
    readonly attrExternalDataServiceId: ros.IResolvable | string;

    /**
     * Attribute JdbcConnectionString: The JDBC connection string.
     */
    readonly attrJdbcConnectionString: ros.IResolvable | string;

    /**
     * Attribute JdbcPassword: The password of the database account.
     */
    readonly attrJdbcPassword: ros.IResolvable | string;

    /**
     * Attribute JdbcUserName: The name of the database account.
     */
    readonly attrJdbcUserName: ros.IResolvable | string;

    /**
     * Attribute ModifyTime: Last modification time.
     */
    readonly attrModifyTime: ros.IResolvable | string;

    /**
     * Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception. A null value in the normal Running state.
     */
    readonly attrStatusMessage: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::JdbcDataSource`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJdbcDataSource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
 */
export class JdbcDataSource extends ros.Resource implements IJdbcDataSource {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: JdbcDataSourceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned. Otherwise, "" is returned "".
     */
    public readonly attrConnectionMessage: ros.IResolvable | string;

    /**
     * Attribute ConnectionStatus: Service Status:.
     */
    public readonly attrConnectionStatus: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DataSourceDescription: Data Source Description.
     */
    public readonly attrDataSourceDescription: ros.IResolvable | string;

    /**
     * Attribute DataSourceId: The data source ID.
     */
    public readonly attrDataSourceId: ros.IResolvable | string;

    /**
     * Attribute DataSourceName: Data Source Name.
     */
    public readonly attrDataSourceName: ros.IResolvable | string;

    /**
     * Attribute DataSourceType: Data Source Type.
     */
    public readonly attrDataSourceType: ros.IResolvable | string;

    /**
     * Attribute ExternalDataServiceId: External Data Service id.
     */
    public readonly attrExternalDataServiceId: ros.IResolvable | string;

    /**
     * Attribute JdbcConnectionString: The JDBC connection string.
     */
    public readonly attrJdbcConnectionString: ros.IResolvable | string;

    /**
     * Attribute JdbcPassword: The password of the database account.
     */
    public readonly attrJdbcPassword: ros.IResolvable | string;

    /**
     * Attribute JdbcUserName: The name of the database account.
     */
    public readonly attrJdbcUserName: ros.IResolvable | string;

    /**
     * Attribute ModifyTime: Last modification time.
     */
    public readonly attrModifyTime: ros.IResolvable | string;

    /**
     * Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception. A null value in the normal Running state.
     */
    public readonly attrStatusMessage: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: JdbcDataSourceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosJdbcDataSource = new RosJdbcDataSource(this, id,  {
            jdbcPassword: props.jdbcPassword,
            dataSourceName: props.dataSourceName,
            dbInstanceId: props.dbInstanceId,
            dataSourceType: props.dataSourceType,
            jdbcUserName: props.jdbcUserName,
            jdbcConnectionString: props.jdbcConnectionString,
            dataSourceDescription: props.dataSourceDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosJdbcDataSource;
        this.attrConnectionMessage = rosJdbcDataSource.attrConnectionMessage;
        this.attrConnectionStatus = rosJdbcDataSource.attrConnectionStatus;
        this.attrCreateTime = rosJdbcDataSource.attrCreateTime;
        this.attrDataSourceDescription = rosJdbcDataSource.attrDataSourceDescription;
        this.attrDataSourceId = rosJdbcDataSource.attrDataSourceId;
        this.attrDataSourceName = rosJdbcDataSource.attrDataSourceName;
        this.attrDataSourceType = rosJdbcDataSource.attrDataSourceType;
        this.attrExternalDataServiceId = rosJdbcDataSource.attrExternalDataServiceId;
        this.attrJdbcConnectionString = rosJdbcDataSource.attrJdbcConnectionString;
        this.attrJdbcPassword = rosJdbcDataSource.attrJdbcPassword;
        this.attrJdbcUserName = rosJdbcDataSource.attrJdbcUserName;
        this.attrModifyTime = rosJdbcDataSource.attrModifyTime;
        this.attrStatusMessage = rosJdbcDataSource.attrStatusMessage;
    }
}
