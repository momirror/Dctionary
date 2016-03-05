//
//  DataPlugin.m
//  HelloCordova
//
//  Created by msp on 16/1/8.
//
//

#import "DataPlugin.h"
#import "Global.h"
#import "DataManagement.h"


@implementation DataPlugin

- (void)parseData:(CDVInvokedUrlCommand*)command
{
    NSDictionary * dic = command.arguments[0];
    NSDictionary * basic = dic[@"basic"];
    NSLog(@"%@",[Global convertUnicodeToUTF8:[dic description]]);
    NSArray * translate = basic[@"explains"];
    Word * word = [[Word alloc] init];
    NSLog(@"%@",[translate description] );
    word.translate = [[translate description] dataUsingEncoding:NSUTF8StringEncoding];
    word.usphonetic = basic[@"us-phonetic"];
    word.ukphonetic = basic[@"uk-phonetic"];
    word.word = dic[@"query"];
    
    NSLog(@"%@",[[NSString alloc] initWithData:word.translate encoding:NSUTF8StringEncoding]);
    
    [[DataManagement instance] addIntoDataSource:word];
    
}

- (void)getAllData:(CDVInvokedUrlCommand *)command
{
    NSLog(@"getAllData");
    
    CDVPluginResult* result = nil;

    NSDictionary * dicData = @{@"word":@"China",@"translate":@"中国"};
    
    NSArray * datas = [[DataManagement instance] queryAllData];
//    NSArray * datas = @[@"1",@"2",@"3"];
    result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:datas];
    
//    result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:dicData];
    NSLog(@"%@",result.status);
    
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
